import PopoversUI from './PopoversUI'

export default class Popovers {
  #element
  #ui

  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    this.#element = element
    this.#ui = new PopoversUI()
  }

  bindToDom() {
    this.#element.append(this.#ui.app)
  }
}
