export const getPositions = (side) => {
  if (!side) return

  return { [positions[side]]: 'calc(100% + 20px)' }
}

const positions = {
  top: 'bottom',
  left: 'right',
  right: 'left',
  bottom: 'top',
}
