import {css} from '@emotion/react'

export const indexStyles = () => {
  return {
    formWrapper : css`
      max-width: 30rem;
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
    `
  }
}

