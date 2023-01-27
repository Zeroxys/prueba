import {css} from '@emotion/react'
import { faL } from '@fortawesome/free-solid-svg-icons'

export const buttonStyles = (
  color, 
  height, 
  marginBottom = false,
  ) => {
  return {
    wrapper : css`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height: ${height}px;
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

