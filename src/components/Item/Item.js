import Div from '../ui/Div/Div'
import Button from '../ui/Button/Button'

import styles from './Item.module.css'

export default class Item {
  #classes
  #title

  /**
   *
   * @param {String|String[]} classes
   */
  constructor(classes, title = '') {
    this.#classes = classes
    this.#title = title
  }

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const item = new Div({ classes: this.#getClasses(this.#classes) }).element
    const btn = new Button({ classes: styles.btn, title: this.#title }).element

    item.append(btn)

    return item
  }

  #getClasses(classes) {
    const classesArray = Array.isArray(classes) ? classes : [classes]

    return classesArray.reduce(
      (acc, className) => {
        if (className) return [...acc, className]
        return acc
      },
      [styles.item]
    )
  }
}
