import {css} from '@emotion/react'

export const profileStyles = () => {
  return {
    profileHeader : css`
      max-width: 50rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    profileNameContainer : css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    buttonContainer : css`
      margin-right: 1.5rem;
    `
  }
}
