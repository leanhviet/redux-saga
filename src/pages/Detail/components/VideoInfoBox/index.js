// @flow
import React, { useEffect } from 'react'

// Components
import Profile from '../../../../components/Profile'

type Props = {
  id: string,
  detailData: Object,
  getVideoByIDRequest: Function
}

const VideoInfoBox = (props: Props) => {
  const { id, detailData, getVideoByIDRequest } = props
  const videoSrc = `https://www.youtube.com/embed/${id}?rel=0&autoplay=1`
  const {
    title,
    viewNumber,
    likeNumber,
    dislikeNumber,
    channelName,
    publishedTime,
    desc
  } = detailData.videoInfo.video

  useEffect(() => {
    id && getVideoByIDRequest(id)
  }, [id, getVideoByIDRequest])

  return (
    <div className="container-fluid video-info">
      <iframe
        className="video-info__img"
        title={title}
        src={videoSrc}
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
      <div className="video-info__header">
        <h3 className="video-info__header__title">{title}</h3>
        <div className="video-info__header__info-renderer">
          <h4 className="view-number">{`${viewNumber} views`}</h4>
          <div className="menu">
            <span className="menu__icon">
              <i className="fa fa-thumbs-up" />
              {likeNumber}
            </span>
            <span className="menu__icon">
              <i className="fa fa-thumbs-down" />
              {dislikeNumber}
            </span>
            <span className="menu__icon">
              <i className="fa fa-share" />
              share
            </span>
            <span className="menu__icon">
              <i className="fa fa-save" />
              save
            </span>
            <span className="menu__icon">
              <i className="fa fa-bars" />
            </span>
          </div>
        </div>
      </div>
      <div className="video-info__desc">
        <Profile name={channelName} subName={`Published on ${publishedTime}`} />
        <p className="video-info__desc__content">{desc}</p>
      </div>
    </div>
  )
}

VideoInfoBox.defaultProps = {
  detailData: {
    videoInfo: {
      video: {
        title: 'West Super Bowl 2015',
        viewNumber: 0,
        likeNumber: '1,1k',
        dislikeNumber: '900k',
        channelName: 'Le Anh Viet',
        publishedTime: 'Published on Jun 4, 2019',
        desc: ''
      }
    }
  },
  id: '',
  getVideoByIDRequest: () => {}
}

export default VideoInfoBox
