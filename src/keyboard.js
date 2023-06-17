 /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import styled from "@emotion/styled";
import { colors } from "./global/colors"

// export const keyboardStyle = {
//   default: 
//   `width: 256px;
//   height: 50px;
//   background: #06B6D4;
//   flex: none;
//   order: 0;
//   flex-grow: 0;`
// }

export function Keyboard({ children }) {
  return (
    <div css={css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 32px;
    gap: 10px;
    position: relative;
    width: 256px;
    height: 333px;
    background: ${colors.gray[400]};
    color: ${colors.gray[600]};
    border-color: solid red;
    `}
    > 
      {children}
    </div>
  )
}

export function Header({ children }) {
  return (
    <div css={css`
    width: 256px;
    height: 50px;
    padding: 0 32px;
    background: ${colors.blue[50]};
    color: white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    `}
    > 
      {children}
    </div>
  )
}
  
// export const buttonStyles = {
//   numbers: `
//   background: #FFFFFF;
//   color: ${colors.gray[600]}
//   `,
//   operators: `
//   background: ${colors.gray[100]};
//   color: ${colors.gray[600]}
//   `,
//   equal: `
//   width: 50px;
//   height: 101px;
//   background: ${colors.blue[50]};
//   `
// }

