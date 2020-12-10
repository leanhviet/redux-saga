import React from 'react'

// Components
import Footer from '../../components/Footer'
import Header from '../../components/Header'

// Containers
import VideoList from './containers/VideoList'

const Home = () => (
  <>
    <Header />
    <div className="main-home">
      <VideoList />
    </div>
    <hr />
    <Footer />
  </>
)

export default Home
