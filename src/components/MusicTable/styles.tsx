import {css} from '@emotion/react'

export const musicTableStyles = () => {
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
    `,
    plusIcon : css`
      .wrapper {
        margin:0;
      }
    `,
    modalStyles : css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rebeccapurple;
    `,
    modalContent : css`
      height:200px;
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      margin-top:1.5rem;
    `,
    songContainer : css`
      display:flex;
      justify-content:space-between;
      padding:0 1.5rem;
      align-items:center;
      box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
      margin-bottom: 1rem;
    `
  }
}
