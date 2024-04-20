import styles from './H3.module.css'

export default class H3 {
  #params

  /**
   * @typedef {object} element
   * @property {String|String[]} classes
   * @property {String} id
   * @property {String} title
   */

  /**
   * @param {element} element
   * {
   * classes = [styles.h3],
   * id = '',
   * title = 'Header 1',
   * }
   */
  constructor(element) {
    this.#params = {
      ...this.#getDefaultParams(),
      ...element,
    }
  }

  #getDefaultParams() {
    return { classes: [], id: '', title: 'Header 3' }
  }

  #getClasses(classes) {
    const classesArray = Array.isArray(classes) ? classes : [classes]

    return classesArray.reduce(
      (acc, className) => {
        if (className) return [...acc, className]
        return acc
      },
      [styles.h3],
    )
  }

  /**
   * @returns элемент
   */
  get element() {
    return this.#createElement()
  }

  #createElement() {
    const element = document.createElement('h3')

    element.textContent = this.#params.title
    element.classList.add(...this.#getClasses(this.#params.classes))

    this.#params.id && (element.id = this.#params.id)

    return element
  }
}
