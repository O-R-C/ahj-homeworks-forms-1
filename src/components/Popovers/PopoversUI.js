import Item from '../Item/Item'
import Div from '../ui/Div/Div'

import styles from './Popovers.module.css'

export default class PopoversUI {
  get app() {
    const app = new Div({ classes: styles.app }).element
    const itemTop = new Item(styles.itemTop, 'show bottom').element
    const itemLeft = new Item(styles.itemLeft, 'show right').element
    const itemRight = new Item(styles.itemRight, 'show left').element
    const itemBottom = new Item(styles.itemBottom, 'show top').element

    app.append(itemTop, itemLeft, itemRight, itemBottom)

    return app
  }
}
