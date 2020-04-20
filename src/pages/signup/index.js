import React from 'react';
import { Container, RightColumn, SignUpLogo, LeftColumn, SignTitle, Subtitle, FormArea, NamesRow } from './styles';
import cookLogo from "./assets/cooking.png"
export default function Signup() {
  return (
    <Container>
        <RightColumn>
            <SignUpLogo src={cookLogo}/>
        </RightColumn>
        <LeftColumn>
            <SignTitle> Seja bem-vindo ao RecipeX </SignTitle>
            <Subtitle> 
                Tenha acesso a milhares de receitas, assim como dicas e tutoriais.
                 <br/> Além disso você poderá também criar suas próprias e compartilhar com 
                 <br/>  amigos e gravar videos os ensinando
            </Subtitle>
            <FormArea>
                <NamesRow>
                    Como quer ser chamado:
                </NamesRow>
                <NamesRow>
                    Email:
                </NamesRow>
                <NamesRow>
                    Senha:
                </NamesRow>
            </FormArea>
        </LeftColumn>
    </Container>
    
  );
}
