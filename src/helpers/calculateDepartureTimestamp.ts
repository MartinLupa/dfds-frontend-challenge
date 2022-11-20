export const calculateDepartureTimestamp = (departureTime: string) => {
  const date = new Date()
  const newDate = new Date(
    date.toString().split(":")[0].slice(0, -2) + departureTime
  )

  return newDate.getTime()
}
