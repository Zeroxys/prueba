import {css} from '@emotion/react'

export const navbarStyles = () => {
  return {
    navbar : css`
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      padding: 0.5rem 0rem;
      background-color: #673299;
      color: white;
      box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
    `,
    navigationMenu : css`
      margin-left: auto;
      ul {
        display: flex;
        padding: 0;
      }
      li {
        list-style-type: none;
        margin: 0 1rem;
        a {
          text-decoration: none;
          display: block;
          width: 100%;
          color: white;
        }
      }
      @media screen and (max-width: 768px) {
        ul {
          display: none;
          position: absolute;
          top: 60px;
          left: 0;
          flex-direction: column;
          width: 100%;
          height: calc(100vh - 77px);
          background-color: white;
          border-top: 1px solid black;
        }
        li {
          text-align: center;
          margin: 0;
          a {
            color: black;
            width: 100%;
            padding: 1.5rem 0;
          }
        }
        li:hover {
          background-color: #eee;
        }
      }
    `,
    menuBars : css`
      height: 40px;
      width: 40px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      position: absolute;
      top: 50%;
      right: 25px;
      transform: translateY(-50%);
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
      }
    `,
    profileImage : css`
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      position: absolute;
      top: 50%;
      right: 25px;
      transform: translateY(-50%);
      @media screen and (max-width: 768px) {
        display: block;
      }
    `
  }
}

