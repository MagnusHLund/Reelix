export const calculateElementTotalWidth = (element: HTMLElement | null): number => {
  if (!element) {
    return 0
  }
  const style = getComputedStyle(element)
  const width = element.offsetWidth
  const paddingLeft = parseFloat(style.paddingLeft) || 0
  const paddingRight = parseFloat(style.paddingRight) || 0
  const borderLeftWidth = parseFloat(style.borderLeftWidth) || 0
  const borderRightWidth = parseFloat(style.borderRightWidth) || 0

  return width + paddingLeft + paddingRight + borderLeftWidth + borderRightWidth
}

export const calculateElementTotalHeight = (element: HTMLElement | null): number => {
  if (!element) {
    return 0
  }

  const style = getComputedStyle(element)
  const height = element.offsetHeight
  const paddingTop = parseFloat(style.paddingTop) || 0
  const paddingBottom = parseFloat(style.paddingBottom) || 0
  const borderTopWidth = parseFloat(style.borderTopWidth) || 0
  const borderBottomWidth = parseFloat(style.borderBottomWidth) || 0

  return height + paddingTop + paddingBottom + borderTopWidth + borderBottomWidth
}

export const calculateElementBoxModelExcludingContentBox = (
  element: HTMLElement | null
): { width: number; height: number } => {
  if (!element) {
    return { width: 0, height: 0 }
  }

  const style = getComputedStyle(element)

  const paddingTop = parseFloat(style.paddingTop) || 0
  const paddingBottom = parseFloat(style.paddingBottom) || 0
  const borderTopWidth = parseFloat(style.borderTopWidth) || 0
  const borderBottomWidth = parseFloat(style.borderBottomWidth) || 0

  const paddingLeft = parseFloat(style.paddingLeft) || 0
  const paddingRight = parseFloat(style.paddingRight) || 0
  const borderLeftWidth = parseFloat(style.borderLeftWidth) || 0
  const borderRightWidth = parseFloat(style.borderRightWidth) || 0

  const width = paddingLeft + paddingRight + borderLeftWidth + borderRightWidth
  const height = paddingTop + paddingBottom + borderTopWidth + borderBottomWidth

  return { width, height }
}

// WIP
