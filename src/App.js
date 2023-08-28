import { createGlobalStyle } from "styled-components";
import ProfileScreen from "./screens/ProfileScreen";
import { useState } from "react";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import React from "react";


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

function App(props) {

  const [nome, setNome] = useState("")
  const [bio, setBio] = useState("")
  const [imagem, setImagem] = useState("")
 
  
    return (
    <>
      <GlobalStyle 
      nome={nome}
      bio={bio}
      imagem={imagem}
      setNome={setNome}
      setBio={setBio}
      setImagem={setImagem}  />

      <ProfileScreen 
      nome={nome}
      bio={bio}
      imagem={imagem}
      setNome={setNome}
      setBio={setBio}
      setImagem={setImagem}/>
    </>
  );
}

export default App;
