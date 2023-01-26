import {css} from '@emotion/react'

export const profileStyles = (formWrapperSize, border) => {
  return {
    profileHeader : css`
      max-width: 50rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: auto;
      margin: 0 auto;
      background-color: lightgray;
      color: white;
      border-radius: 0 1.5rem;

      svg {
        margin-left:1.5rem;
      }

      h3 {
        margin-left:1.5rem;
      }

    `,
  }
}
