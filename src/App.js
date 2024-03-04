import { createGlobalStyle } from "styled-components";
import ProfileScreen from "./screens/ProfileScreen";
import React from "react";

//estado global de estilização
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

//componente pai
function App() {

  return (
    <>
    <GlobalStyle />
    {/* recebendo profile screen para renderizar na tela */}
    <ProfileScreen />
    </>
  );
}

export default App;
