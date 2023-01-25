import React from 'react'
import { buttonStyles } from './styles'

const Button = ({onClick, text, color}) => {
  const styles = buttonStyles(color)

  return (<button onClick={onClick} css={styles.wrapper}>
    <p>{text}</p>
  </button>)
}

export default Button
