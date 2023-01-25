import {css} from '@emotion/react'

export const buttonStyles = (color) => {
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
    padding: 10px 15px;
    text-align:center;
    margin-bottom:1.5rem;
    transition: transform 100ms ease-out;
      &:hover {
        background: ${color ?? '#8c54ff'};
        transform: scale(1.1);
      }
    `
  }
}

