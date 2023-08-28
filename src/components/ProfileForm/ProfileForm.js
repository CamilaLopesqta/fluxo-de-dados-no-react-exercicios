import { useState } from "react";
import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";


const ProfileForm = (props) => {
  
 const [nome1, setNome1] = useState("")
  const [bio1, setBio1] = useState("")
  const [imagem1, setImagem1] = useState("")

  const enviarDados = () => {
    props.setNome(nome1)
    props.setBio(bio1)
    props.setImagem(imagem1)
  }
  console.log(setNome1, setBio1, setImagem1);

     return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={props.nome1} onChange={(e) => setNome1(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            value={props.bio1} onChange={(e) => setBio1(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            value={props.imagem1} onChange={(e)=> setImagem1(e.target.value)}
          />
        </InputWrapper>

        <Button onClick={enviarDados} >Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
