import React, { useEffect, useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { withRouter } from 'react-router-dom'

// Themes
import ImageTheme from '../../themes/images'

// Constants
import { USER_KEY } from '../../constants/localStorage'
import ROUTES from '../../constants/routes'

// Utils
import { getStorage, setStorage, removeStorage } from '../../utils/storage'

// Components
import Input from '../Input'
import Profile from '../Profile'

const Header = props => {
  const [isLogin, setLogin] = useState(false)
  const [profile, setmyProfile] = useState({ myProfile: {} })

  // Logout
  const logout = () => {
    setLogin(false)
    removeStorage(USER_KEY)
  }

  // Login success
  const onSuccess = googleUser => {
    setLogin(true)
    setStorage(USER_KEY, googleUser)
    setmyProfile({ myProfile: googleUser.profileObj })
  }

  // Login fail
  const onFailure = error => {
    console.log(error)
  }

  useEffect(() => {
    if (getStorage(USER_KEY)) {
      setLogin(true)
      setmyProfile({ myProfile: getStorage(USER_KEY).profileObj })
    } else {
      setLogin(false)
    }
  }, [])

  const isProfile = isLogin ? (
    <>
      <Profile
        name={profile.myProfile.name}
        src={profile.myProfile.imageUrl}
        subName={profile.myProfile.email}
      />
      <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
    </>
  ) : (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      scope="https://www.googleapis.com/auth/youtube.force-ssl"
    />
  )

  const handleSearchByKeyWord = val =>
    props.history.push(`${ROUTES.SEARCH}/${val}`)

  return (
    <header className="container-fluid header">
      <div className="row header__row">
        <div className="col-md-2 header__row__logo">
          <a href="/">
            <img
              className="logo-link__image img-responsive"
              src={ImageTheme.logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="col-md-6 col-md-push-1 header__row__search">
          <Input
            placeholder="Type to search..."
            handleOnKeyDown={handleSearchByKeyWord}
            className="search"
          />
        </div>
        <div className="col-md-3 col-md-push-1 header__row__profile">
          {isProfile}
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header)
