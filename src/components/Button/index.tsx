import React from 'react'
import { buttonStyles } from './styles'

const Button = ({
  onClick, 
  text, 
  color, 
  height, 
  marginBottom, 
  padding
}) => {
  const styles = buttonStyles(color, height, marginBottom, padding)

  return (<button onClick={onClick} css={styles.wrapper}>
    <p>{text}</p>
  </button>)
}

export default Button
