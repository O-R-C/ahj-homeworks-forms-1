import Div from '../ui/Div/Div'
import H3 from '../ui/headers/H3/H3'
import P from '../ui/P/P'

import styles from './Tooltip.module.css'

export default class Tooltip {
  #classes
  #title
  #text

  /**
   *
   * @param {String|String[]} classes
   */
  constructor(classes, title = '', text = '') {
    this.#classes = classes
    this.#title = title
    this.#text = text
  }

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const tooltip = new Div({
      classes: this.#getClasses(this.#classes),
    }).element

    const header = new H3({
      classes: styles.header,
      title: this.#title,
    }).element

    const paragraph = new P({
      classes: styles.paragraph,
      title: this.#text,
    }).element

    tooltip.append(header, paragraph)

    return tooltip
  }

  #getClasses(classes) {
    const classesArray = Array.isArray(classes) ? classes : [classes]

    return classesArray.reduce(
      (acc, className) => {
        if (className) return [...acc, className]
        return acc
      },
      [styles.tooltip],
    )
  }
}
