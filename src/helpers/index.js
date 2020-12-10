// Utils
import { date, dateFromNow, durationToTime, roundNumber } from '../utils'

// convert to neccesary data from api data for video item
export const convertDataForVideoItem = (data = []) => {
  const videos = []

  data.map(value => {
    const video = {}
    const { snippet, id, contentDetails, statistics } = value || {}

    // set necessary fields for a video item from API
    video.id = id
    video.img = snippet.thumbnails.medium.url || ''
    video.title = snippet.title || ''
    video.channelName = snippet.channelTitle || ''
    video.publishedTime = dateFromNow(snippet.publishedAt) || ''
    video.timeout = durationToTime(contentDetails.duration) || ''
    video.numberOfViews = parseInt(statistics.viewCount).toLocaleString() || ''

    return videos.push(video)
  })

  return videos
}

// convert to neccesary data from api data for comments
export const convertDataForComments = (data = []) => {
  const comments = []

  data.map(value => {
    const comment = convertDataForComment(value)

    return comments.push(comment)
  })

  return comments
}

export const convertDataForComment = (value = {}) => {
  const comment = {}
  const { snippet } = value.snippet.topLevelComment || {}

  // set necessary fields for a comment item from API
  comment.id = value.id
  comment.src = snippet.authorProfileImageUrl || ''
  comment.name = snippet.authorDisplayName || ''
  comment.content = snippet.textOriginal || ''
  comment.likeNumber = snippet.likeCount || ''
  comment.dislikeNumber = '2' || ''

  return comment
}

// convert to neccesary data from api data for video detail page
export const convertDataForVideoDetail = (data = {}) => {
  const videoInfo = {}

  const { snippet, statistics } = data || {}

  // set necessary fields for a video info from API
  videoInfo.title = snippet.title || ''
  videoInfo.channelName = snippet.channelTitle || ''
  videoInfo.publishedTime = date(snippet.publishedAt) || ''
  videoInfo.desc = snippet.description || ''
  videoInfo.viewNumber = parseInt(statistics.viewCount).toLocaleString() || ''
  videoInfo.likeNumber = roundNumber(statistics.likeCount) || ''
  videoInfo.dislikeNumber = roundNumber(statistics.dislikeCount) || ''

  return videoInfo
}
