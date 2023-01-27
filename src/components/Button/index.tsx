import React from 'react'
import { buttonStyles } from './styles'

const Button = ({
  onClick, 
  text, 
  color, 
  height, 
  marginBottom, 
  padding,
  children
}) => {
  const styles = buttonStyles(color, height, marginBottom, padding)

  return (<button onClick={onClick} css={styles.wrapper}>
    {children ?? children}
    {text ?? <p>{text}</p>}
  </button>)
}

export default Button
