import PopoversUI from './PopoversUI'
import { getPositions } from './getPositions'

export default class Popovers {
  #ui
  #app
  #element
  #tooltip
  #itemHasTooltip

  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    this.#element = element
    this.#ui = new PopoversUI()
    this.#app = this.#ui.app
  }

  init() {
    this.#bindToDom()
    this.#addListeners()
  }

  #bindToDom() {
    this.#element.append(this.#app)
  }

  #addListeners() {
    this.#app.addEventListener('click', this.#onClick)
  }

  #onClick = (evt) => {
    const item = evt.target.closest('[class*="item"]')

    if (!item) return

    this.#itemHasTooltip === item
      ? this.#removeTooltip()
      : this.#showTooltip(item)
  }

  #showTooltip(element) {
    this.#removeTooltip()

    const side = element.dataset.side

    const positions = getPositions(side)
    this.#tooltip = this.#ui.getTooltip(side)

    Object.keys(positions).forEach((key) => {
      this.#tooltip.style[key] = positions[key]
    })

    element.append(this.#tooltip)
    this.#itemHasTooltip = element
  }

  #removeTooltip() {
    this.#tooltip && this.#tooltip.remove()
    this.#itemHasTooltip = null
  }
}
