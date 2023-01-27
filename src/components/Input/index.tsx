import React from 'react'
import { inputStyles } from './styles'

const Input = ({
  label, 
  type = 'text', 
  name, 
  value,
  onChange
}) => {
  const styles = inputStyles()
  return (
    <div css={styles.control}>
      <input 
        onChange={onChange}
        type={type} 
        name={name}
        value={value} 
        css={styles.input} 
        placeholder="none" 
        required />
      <label htmlFor={name} css={styles.label}>{label}</label>
    </div>
  )
}

export default Input
