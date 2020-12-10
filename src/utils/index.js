// Libs
import moment from 'moment'

// calculate published at
export const dateFromNow = dateString =>
  moment(dateString, 'YYYY-MM-DD').fromNow()

// convert format date
export const date = dateString => moment(dateString, 'YYYY-MM-DD').format('LL')

// convert duratiton from data api to time
export const durationToTime = time =>
  moment.utc(convertDurationToSeconds(time) * 1000).format('mm:ss')

// convert count Views from data api to round number
export const roundNumber = number => {
  let viewCount

  if (number > 1000000) {
    number = Math.round(number / 1000000)
    viewCount = `${number}M`
  } else if (number > 1000) {
    number = Math.round(number / 1000)
    viewCount = `${number}K`
  } else {
    viewCount = number
  }

  return viewCount
}

// convert duratiton from data api to seconds
const convertDurationToSeconds = time => {
  let a = time.match(/\d+H|\d+M|\d+S/g)
  let result = 0
  let d = { H: 3600, M: 60, S: 1 }
  let num = 0
  let type = 0

  for (let i = 0; i < a.length; i++) {
    num = a[i].slice(0, a[i].length - 1)
    type = a[i].slice(a[i].length - 1, a[i].length)

    result += parseInt(num) * d[type]
  }

  return result
}
