import React from 'react'
import { inputStyles } from './styles'

const Input = ({label}) => {
  const styles = inputStyles()
  return (
    <div css={styles.control}>
      <input type="text" name="name" css={styles.input} placeholder="none" required />
      <label htmlFor="name" css={styles.label}>{label}</label>
    </div>
  )
}

export default Input
