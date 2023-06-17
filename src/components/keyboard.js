/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import styled from "@emotion/styled";
import { colors } from "../global/colors"

// export const keyboardStyle = {
  //   default: 
  //   `width: 256px;
  //   height: 50px;
  //   background: #06B6D4;
  //   flex: none;
  //   order: 0;
  //   flex-grow: 0;`
  // }
  
  export function Calculator({category,children}){
    return (
      <div css={css`
      max-width: 256px;
      margin: 50px auto;
      padding: 23px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      `}
      > 
        {children}
      </div>
    )
  }

  export function Header({ children,name}) {
    return (
      <div css={css`
      width: 256px;
      height: 50px;
      background: ${colors.blue[50]};
      color: white;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      `}
      > 
      {children}
      <br/>
      {name}
      </div>
    )
  }
  
  export function Display({ children }) {
    return (
      <div css={css`
      
      width: 254px;
      height: 50px;
      background: ${colors.white};
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      `}
      > 
        {children}
      </div>
    )
  }
  export function Keyboard({ children }) {
    return (
      <div css={css`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      position: center;
      width: 254px;
      height: 203px;
      background: ${colors.gray[200]};
      color: ${colors.gray[600]};
      gap: 1px;
    `}
    > 
      {children}
    </div>
  )
}




export const columnStyle = css`
display: grid;
grid-template-rows: repeat(1, 1fr);
grid-gap: 1px;
`;

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

