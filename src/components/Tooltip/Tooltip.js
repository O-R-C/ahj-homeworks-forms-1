import Div from '../ui/Div/Div'
import H3 from '../ui/headers/H3/H3'
import P from '../ui/P/P'

import styles from './Tooltip.module.css'

export default class Tooltip {
  #params

  /**
   * @typedef {object} element
   * @property {String|String[]} classes
   * @property {String} id
   * @property {String} title
   * @property {String} text
   * @property {String} side
   */

  /**
   * @param {element} element
   * {
   * classes = [styles.div],
   * id = '',
   * title = '',
   * text = '',
   * side = 'left',
   * }
   */
  constructor(element) {
    this.#params = {
      ...this.#getDefaultParams(),
      ...element,
    }
  }

  #getDefaultParams() {
    return { classes: [], id: '', title: '', text: '', side: 'left' }
  }

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const tooltip = new Div({
      classes: this.#getClasses(this.#params.classes),
    }).element

    const header = new H3({
      classes: styles.header,
      title: this.#params.title,
    }).element

    const paragraph = new P({
      classes: styles.paragraph,
      title: this.#params.text,
    }).element

    const arrow = new Div({
      classes: styles[`arrow${this.#params.side.toUpperCase()}`],
    }).element

    tooltip.append(header, paragraph, arrow)

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
