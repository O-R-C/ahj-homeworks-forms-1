import Popovers from '../../components/Popovers/Popovers'

const popovers = new Popovers(document.body)
popovers.init()

const app = document.querySelector('[class*="app"]')
const buttons = app.querySelectorAll('button')

test('app should render', () => {
  expect(app).toBeTruthy()
})

describe('tooltip should render', () => {
  test.each([...buttons])('%p', (button) => {
    button.click()
    const tooltip = app.querySelector('[class*="tooltip"]')
    expect(tooltip).toBeTruthy()
  })
})

describe('tooltip should be one', () => {
  test.each([...buttons])('%p', (button) => {
    button.click()
    const tooltip = app.querySelectorAll('[class*="tooltip"]')
    expect(tooltip.length).toBe(1)
  })
})

test('tooltip should hide', () => {
  const button = buttons[0]
  button.click()
  button.click()
  const tooltip = app.querySelector('[class*="tooltip"]')
  expect(tooltip).toBeFalsy()
})
