// Libs
import React from 'react'

// Constants
import ROUTES from '../../constants/routes'

const NotFound = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="notfound">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <div className="notfound__details">
            <p>Sorry, an error has occured, Requested page not found!</p>
          </div>
          <div className="notfound__actions">
            <a href={ROUTES.HOME} className="btn btn-primary btn-lg">
              <span className="glyphicon glyphicon-home" />
              Take Me Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
