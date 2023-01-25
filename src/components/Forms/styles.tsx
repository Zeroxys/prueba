import {css} from '@emotion/react'

export const indexStyles = (formWrapperSize) => {
  return {
    formWrapper : css`
      max-width: ${formWrapperSize ?? '30'}rem;
      width: 100%;
      height: auto;
      margin: 0 auto;
    `,

    loginForm : css`
      padding: 4rem 2rem 2rem;
      border-radius: 0.25rem;
      color: black;
      background: white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    `,
    columnWrapper : css`
      display: flex;
      flex-direction: row;
      justify-content:center;
      align-items:center;
      flex-wrap: wrap;
    `,
    column : css`
      max-width : 28rem;
      width: 100%;
    `
  }
}

