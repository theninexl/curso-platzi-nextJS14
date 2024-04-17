"use client"

import classNames from 'classnames/bind'
classNames
import Image from 'next/image'
import { useState } from 'react'
import styles from './Description.module.sass'



const PLACEHOLDER_IMAGE='data:image/jpeg;base64,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'


export const Description = () => {
  const [border, setBorder] = useState(false);

  const handleClick = () => {
    setBorder(!border);
  }

  const cx = classNames.bind(styles)

  const buttonStyles = cx(
    'Description__button',
    {
      'Description__button--border': border,
    }
  )

  return (
    <section className={styles.Description}>
      <button
        onClick={handleClick}
        className={buttonStyles}
      >
        <div className={styles.Description__imageContainer}>
          <Image 
            src='/images/description.jpeg' 
            alt='products marketplace'
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>Lorem ipsum sit dolor amet</p>
      </div>
    </section>
  )
}