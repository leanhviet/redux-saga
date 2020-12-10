// @flow
import React, { useEffect } from 'react'

// Component
import Video from '../../../../components/Video'
import Indicator from '../../../../components/Indicator'

type Props = {
  searchData: Object,
  keyword: string,
  getVideosByKeyWordRequest: Function
}

const Cards = (props: Props) => {
  const { searchData, keyword, getVideosByKeyWordRequest } = props
  const { videos, fetching } = searchData

  useEffect(() => {
    keyword && getVideosByKeyWordRequest(keyword)
  }, [getVideosByKeyWordRequest, keyword])

  if (fetching) return <Indicator />

  return (
    <div className="container cards">
      <div className="row cards__row">
        {videos.map(video => (
          <div key={video.id} className="col-md-3">
            <Video video={video} />
          </div>
        ))}
      </div>
    </div>
  )
}

Cards.defaultProps = {
  searchData: {
    videos: [],
    fetching: false
  },
  keyword: '',
  getVideosByKeyWordRequest: () => {}
}

export default Cards
