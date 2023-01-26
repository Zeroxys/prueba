import {css} from '@emotion/react'
import { faL } from '@fortawesome/free-solid-svg-icons'

export const buttonStyles = (
  color, 
  height = false, 
  marginBottom = false, 
  padding = false
  ) => {
  return {
    wrapper : css`
    width:100%;
    background: ${color ?? '#8c54ff'};
    border: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: ${marginBottom ? marginBottom : 1.5}rem;
    text-align:center;
    transition: transform 100ms ease-out;
      &:hover {
        background: ${color ?? '#8c54ff'};
        transform: scale(1.1);
      }
    `
  }
}

