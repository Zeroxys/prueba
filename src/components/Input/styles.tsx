import {css} from '@emotion/react'

export const inputStyles = () => {
  return {
    control : css`
      position: relative;
      width: 100%;
      height: 3rem;
      margin-bottom: 1.5rem;
    `,
    label : css`
      position: absolute;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: inherit;
      left: 1rem;
      top: 0.75rem;
      padding: 0 0.25rem;
      color: gray;
      background: white;
      transition: all 0.3s ease;
    `,
    input : css`
      position: absolute;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: inherit;
      top: 0;
      left: 0;
      z-index: 1;
      resize: none;
      width: 90%;
      height: auto;
      padding: 0.75rem 1.25rem;
      border-radius: 0.25rem;
      border: 1.5px solid gray;
      color: black;
      background: transparent;
      transition: all 0.2s ease-in-out;

      &::placeholder {
        opacity: 0;
        visibility: hidden;
        color: transparent;
      }

      &:focus {
        outline: none;
        border: 2px solid blue;

        & + label {
          top: -0.75rem;
          left: 1rem;
          z-index: 5;
          font-size: 0.875rem;
          font-weight: 500;
          color:blue;
          transition: all 0.2s ease-in-out;
        }
        
      }

      &:not(:placeholder-shown) + input {
        border:1px solid red;
        &:not(:focus) {
          & + label {
            top: -0.75rem;
            left: 1rem;
            z-index: 9;
            font-size: 0.875rem;
            font-weight: 100;
            transition: all 0.2s ease-in-out;
          }
        }
      }
    `
  }
}
