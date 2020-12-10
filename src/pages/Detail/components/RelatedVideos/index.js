// @flow
import React, { useEffect } from 'react'

// Component
import Video from '../../../../components/Video'
import Indicator from '../../../../components/Indicator'

type Props = {
  id: string,
  detailData: Object,
  getRelatedVideosRequest: Function
}

const RelatedVideos = (props: Props) => {
  const { id, detailData, getRelatedVideosRequest } = props
  const { videos, fetching } = detailData.relatedVideos

  useEffect(() => {
    id && getRelatedVideosRequest(id)
  }, [getRelatedVideosRequest, id])

  if (fetching) return <Indicator />

  return (
    <div className="related-video">
      {videos.map(video => (
        <div key={video.id} className="related-video__row">
          <Video video={video} />
        </div>
      ))}
    </div>
  )
}

RelatedVideos.defaultProps = {
  id: '',
  detailData: {
    relatedVideos: {
      videos: [],
      fetching: false
    }
  },
  getRelatedVideosRequest: Function
}

export default RelatedVideos
