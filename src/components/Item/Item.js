import Div from '../ui/Div/Div'
import Button from '../ui/Button/Button'

import styles from './Item.module.css'

export default class Item {
  #classes
  #side

  /**
   *
   * @param {String|String[]} classes
   */
  constructor(classes, side = '') {
    this.#classes = classes
    this.#side = side
  }

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const item = new Div({ classes: this.#getClasses(this.#classes) }).element
    item.dataset.side = this.#side

    const btn = new Button({ classes: styles.btn, title: `show ${this.#side}` })
      .element

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
      [styles.item],
    )
  }
}
