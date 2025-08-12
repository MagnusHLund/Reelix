import Button from '../../input/Button'
import Image from '../common/Image'
import React from 'react'
import './BaseModal.scss'

interface BaseModalProps {
  title?: string
  children: React.ReactNode
  onClose: () => void
}

const BaseModal: React.FC<BaseModalProps> = ({ children, onClose, title = '' }) => {
  return (
    <div className='modal__container'>
      <div className='modal__header'>
        <div />
        <h2 className='modal__title'>{title}</h2>
        <Button className='modal__close-button' onClick={onClose}>
          <Image src='/black.png' alt='Close modal' />
        </Button>
      </div>
      <div className='modal__content'>{children}</div>
    </div>
  )
}

export default BaseModal
