// @flow
import React from 'react'
import ImageTheme from '../../themes/images'

type Props = {
  src: string,
  name: string,
  subName: string
}

const Profile = (props: Props) => {
  const { src, name, subName } = props
  const defaultSrc = ev => (ev.target.src = ImageTheme.profile)

  return (
    <div className="profile">
      <img
        className="img-circle profile__img"
        src={src}
        onError={defaultSrc}
        alt="profile"
      />
      <div className="text-left profile__info">
        <p className="profile__info__username">{name}</p>
        <p className="profile__info__subs">{subName}</p>
      </div>
    </div>
  )
}

Profile.defaultProps = {
  src: '',
  name: 'Le Anh Viet',
  subName: '9 Subscribers',
  onLogout: () => {}
}

export default Profile
