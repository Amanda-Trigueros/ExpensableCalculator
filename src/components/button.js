 /** @jsxImportSource @emotion/react */
 import { css } from "@emotion/react";
 // import styled from "@emotion/styled";
 import { colors } from "../global/colors"
//  import { buttonStyles } from "./keyboard";

const buttonStyles = {
  numbers: `
  background: #FFFFFF;
  color: ${colors.gray[600]};
  border-width: 1px;
  border-style: solid;
  border-color: black;
  
  `,
  operators: `
  background: ${colors.gray[100]};
  color: ${colors.gray[600]};
  
  `,
  equal: `
  width: 50px;
  height: 101px;
  background: ${colors.blue[50]};
  
  `
}

function Button({onClick, value, children, type="numbers"}) {
return ( 
  <button value={value} onClick={onClick} css={css`
  width: 50px;
  height: 50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  ${buttonStyles[type]}

  `}

>{children}</button>
)
}

export default Button