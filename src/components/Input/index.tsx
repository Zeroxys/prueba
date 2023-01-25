import React from 'react'
import { inputStyles } from './styles'

const Input = ({Label}) => {
  const styles = inputStyles()
  return (
    <div css={styles.control}>
      <input type="text" name="name" css={styles.input} placeholder="none" required />
      <label htmlFor="name" css={styles.label}>Name</label>
    </div>
  )
}

export default Input
