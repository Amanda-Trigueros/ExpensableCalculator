 /** @jsxImportSource @emotion/react */
 import { css } from "@emotion/react";
 // import styled from "@emotion/styled";
 import { colors } from "./global/colors"
//  import { buttonStyles } from "./keyboard";

const buttonStyles = {
  numbers: `
  background: #FFFFFF;
  color: ${colors.gray[600]};
  
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

function Button({onClick, value, children, style="numbers"}) {
return ( 
  <button value={value} onClick={onClick} css={css`
  width: 50px;
  height: 50px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  position: absolute;
  text-align: center;
  ${buttonStyles.[style]}

  `}

>{children}</button>
)
}

export default Button