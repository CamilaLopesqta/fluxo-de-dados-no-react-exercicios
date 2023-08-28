import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";
import React from "react";
import { useState } from "react";

function ProfileScreen() {
  
  const [nome, setNome] = useState("")
  const [bio, setBio] = useState("")
  const [imagem, setImagem] = useState("")

  return (
    <ScreenContainer>
      <ProfileMenu nome={nome} bio={bio} imagem={imagem}/>

      <ProfileForm setNome={setNome} setBio={setBio} setImagem={setImagem}/>
    </ScreenContainer>
  );
}

export default ProfileScreen;