const calculateTimeDiference = (departureTime, arrivalTime) => {
  const departureTimeArr = departureTime.split(":").map(Number)
  const arrivalTimeArr = arrivalTime.split(":").map(Number)
  let hoursDifference = 0

  //Calculate hours difference. It allows +1 day in arrival time.
  //Example: departure 23:00, arrival 02:00 (is interpreted as 3 hour journey)
  if (arrivalTimeArr[0] < departureTimeArr[0]) {
    hoursDifference = 24 - departureTimeArr[0] + arrivalTimeArr[0]
  } else {
    hoursDifference = arrivalTimeArr[0] - departureTimeArr[0]
  }

  //Calculate minutes difference.
  const minutesDifference = arrivalTimeArr[1] - departureTimeArr[1]

  //Convert hour difference into seconds
  const hoursDifferenceInSeconds = hoursDifference * 3600
  //Convert minute difference into seconds
  const minutesDifferenceInSeconds = minutesDifference * 60

  return hoursDifferenceInSeconds + minutesDifferenceInSeconds
}

console.log(calculateTimeDiference("23:00", "23:01"))
console.log(calculateTimeDiference("23:00", "22:00"))
