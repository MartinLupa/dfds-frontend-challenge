const bp = {
  small: 500,
  medium: 720,
  large: 1200,
}

export const mq = (n) => {
  const bpArray = Object.keys(bp).map((key) => [key, bp[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [])

  return result
}
