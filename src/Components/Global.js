import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  min-height: 100vh;
  background: #d6e0e8;
  font-family: "Caveat", cursive;
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  color: #000000;

}
`;

export default GlobalStyle;
