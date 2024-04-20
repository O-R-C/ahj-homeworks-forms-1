export const getPositions = (side) => {
  if (!side) return

  return { [positions[side]]: 'calc(100% + 10px)' }
}

const positions = {
  top: 'bottom',
  left: 'right',
  right: 'left',
  bottom: 'top',
}
