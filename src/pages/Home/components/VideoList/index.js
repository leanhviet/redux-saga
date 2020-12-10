// @flow
import React, { useEffect } from 'react'

// Component
import Video from '../../../../components/Video'
import Indicator from '../../../../components/Indicator'

type Props = {
  mainData: Object,
  getVideosRequest: Function
}

const VideoList = (props: Props) => {
  const { getVideosRequest, mainData } = props
  const { videos, fetching } = mainData

  useEffect(() => {
    getVideosRequest()
  }, [getVideosRequest])

  if (fetching) return <Indicator />

  return (
    <div className="container video-list">
      <div className="row video-list__row">
        {videos.map(video => (
          <div key={video.id} className="col-md-3">
            <Video video={video} />
          </div>
        ))}
      </div>
    </div>
  )
}

VideoList.defaultProps = {
  mainData: {
    videos: [],
    fetching: false
  },
  getVideosRequest: () => {}
}

export default VideoList
