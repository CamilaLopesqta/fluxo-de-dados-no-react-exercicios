import React, {useState} from "react";
import {
  Button,
  Form,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
} from "./ProfileForm.styled";

//componente filho do profile screen
const ProfileForm = (props) => {
//estados exclusivos para o form
  const [nome1, setNome1] = useState("")
  const [bio1, setBio1] = useState("")
  const [imagem1, setImagem1] = useState("")
//função para o botão enviar os dados do form para o menu
//a função pega/seta os dados do estado do profile screen e renderiza e
//envia os dados do profile form para o profile menu
  const enviarDados = (event) => {
    event.preventDefault()
    props.setNome(nome1);
    props.setBio(bio1);
    props.setImagem(imagem1);
  };
 
  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          {/* inputs controlados */}
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            //guardando dados digitados no estado do profile form
            value={nome1}
            //função para pegar os valores digitados no input
            // e renderizar no profile form
            onChange={(e) => setNome1(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            value={bio1}
            //função para pegar os valores digitados na bio
            onChange={(e) => setBio1(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            value={imagem1}
            //função para pegar os valores digitados na imagem
            onChange={(e) => setImagem1(e.target.value)}
          />
        </InputWrapper>

        <Button onClick={enviarDados}>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
