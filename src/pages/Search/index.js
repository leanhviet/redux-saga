import React from 'react'

// Components
import Footer from '../../components/Footer'
import Header from '../../components/Header'

// Containers
import Cards from './containers/Cards'

const Search = props => {
  const { keyword } = props.match.params

  return (
    <>
      <Header />
      <div className="search">
        <Cards keyword={keyword} />
      </div>
      <hr />
      <Footer />
    </>
  )
}

export default Search
