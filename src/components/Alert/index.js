// @flow
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

type Props = {
  isShowAlert: boolean
}

const Alert = (props: Props) => {
  const { isShowAlert } = props

  const [isShow, setShowAlert] = useState(isShowAlert)

  const handleClose = () => setShowAlert(!isShow)

  return (
    <Modal show={isShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alert: Update Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please login account before when update comment</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

Alert.defaultProps = {
  isShowAlert: false
}

export default Alert
