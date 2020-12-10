import React from 'react'

// Components
import Footer from '../../components/Footer'
import Header from '../../components/Header'

// Containers
import VideoInfoBox from './containers/VideoInfoBox'
import RelatedVideos from './containers/RelatedVideos'
import CommentList from './containers/CommentList'

const Detail = props => {
  const { id } = props.match.params

  return (
    <>
      <Header />
      <div className="detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-md-push-1">
              <VideoInfoBox id={id} />
              <h3 className="text-left">Comments:</h3>
              <CommentList videoId={id} />
            </div>
            <div className="col-md-2 col-md-push-2">
              <RelatedVideos id={id} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  )
}

export default Detail
