import Div from '../ui/Div/Div'
import Item from '../Item/Item'
import Tooltip from '../Tooltip/Tooltip'

import styles from './Popovers.module.css'

export default class PopoversUI {
  get app() {
    const app = new Div({ classes: styles.app }).element
    const itemTop = new Item(styles.itemTop, 'bottom').element
    const itemLeft = new Item(styles.itemLeft, 'right').element
    const itemRight = new Item(styles.itemRight, 'left').element
    const itemBottom = new Item(styles.itemBottom, 'top').element

    app.append(itemTop, itemLeft, itemRight, itemBottom)

    return app
  }

  getTooltip(side) {
    const tooltip = new Tooltip({
      classes: styles.tooltip,
      title: 'tooltip',
      text: 'awesome text',
      side: side,
    }).element

    return tooltip
  }
}
