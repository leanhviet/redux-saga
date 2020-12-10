// @flow
import React from 'react'
import { Link } from 'react-router-dom'

// Constants
import ROUTES from '../../constants/routes'

type Props = {
  video: Object
}

const Video = (props: Props) => {
  const {
    id,
    img,
    timeout,
    title,
    publishedTime,
    channelName,
    numberOfViews
  } = props.video
  const defaultSrc = ev =>
    (ev.target.src = 'https://via.placeholder.com/365x320')

  return (
    <div className="video">
      <div className="video__area">
        <Link to={`${ROUTES.DETAIL}/${id}`}>
          <div className="video__area__mask">
            <div className="vertical-align">
              <i className="fa fa-play-circle" />
              <p>Play Now</p>
            </div>
          </div>
          <img
            src={img}
            onError={defaultSrc}
            alt="video"
            className="img-responsive"
          />
          <span className="duration">{timeout}</span>
        </Link>
      </div>
      <Link to={`${ROUTES.DETAIL}/${id}`}>
        <h4>{title}</h4>
      </Link>
      <p className="video__published-text">
        <span>{publishedTime}</span> By <strong>{channelName}</strong>
      </p>
      <p className="views">{`${numberOfViews} Views`}</p>
    </div>
  )
}

Video.defaultProps = {
  video: {
    id: '',
    img: '',
    timeout: '00:00',
    title: '',
    publishedTime: '',
    channelName: '',
    numberOfViews: 0
  }
}

export default Video
