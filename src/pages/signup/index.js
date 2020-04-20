import React, { Component } from 'react';
import { 
        Container, 
        RightColumn, 
        SignUpLogo, 
        LeftColumn, 
        SignTitle, 
        Subtitle, 
        FormArea, 
        NamesRow, 
        NameInput, 
        NameLabel,
        EmailRow,
        EmailLabel,
        EmailInput,
        PasswordRow,
        PasswordLabel,
        PasswordInput
     } from './styles';
import cookLogo from "./assets/cooking.png"
import { RemoveRedEye } from '@material-ui/icons';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            name: "",
            password: "",
            confirmPassword: "",
            passwordIsMasked: true
        }
    }

    changeNameHandler = event => {
        this.setState({
          name: event.target.value
        });

        console.log(this.state.name)
      }


      changeEmailHandler = event => {
        this.setState({
          email: event.target.value
        });

        console.log(this.state.email)
      }

      changePasswordHandler = event => {
        this.setState({
          password: event.target.value
        });

        console.log(this.state.password)
      }

      changeConfirmPasswordHandler = event => {
        this.setState({
          confirmPassword: event.target.value
        });

        console.log(this.state.confirmPassword)
      }

      togglePasswordMask = () => {
          this.setState(prevState => ({
              passwordIsMasked: !prevState.passwordIsMasked,
          }))
      }
    render() {
        return (
            <Container>
                <RightColumn>
                    <SignUpLogo src={cookLogo} />
                </RightColumn>
                <LeftColumn>
                    <SignTitle> Seja bem-vindo ao RecipeX </SignTitle>
                    <Subtitle>
                        Tenha acesso a milhares de receitas, assim como dicas e tutoriais.
                 <br /> Além disso você poderá também criar suas próprias e compartilhar com
                 <br />  amigos e gravar videos os ensinando
            </Subtitle>
                    <FormArea>
                        <NamesRow>
                            <NameLabel>
                                Como quer ser chamado:
                            </NameLabel>
                            <NameInput
                                type="text"
                                name="Name"
                                value={this.state.name}
                                onChange={this.changeNameHandler}
                            />
                        </NamesRow>
                        <EmailRow>
                            <EmailLabel>
                                Qual seu email:
                            </EmailLabel>
                            <EmailInput 
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.changeEmailHandler}
                            />
                        </EmailRow>
                        <PasswordRow>
                            <PasswordLabel>
                                Senha:
                            </PasswordLabel>
                            <PasswordInput 
                                type={this.state.passwordIsMasked ? 'password' : 'text'}
                                name="password"
                                value={this.state.password}
                                onChange={this.changePasswordHandler}/>
                                <RemoveRedEye
                                    color={this.state.passwordIsMasked ? "disabled" :  ""}
                                    onClick={this.togglePasswordMask}
                                />
                        </PasswordRow>
                        <PasswordRow>
                            <PasswordLabel>
                                Confirmar Senha:
                            </PasswordLabel>
                            <PasswordInput 
                                type="password"
                                name="password"
                                value={this.state.confirmPassword}
                                onChange={this.changeConfirmPasswordHandler}/>
                        </PasswordRow>
                    </FormArea>
                </LeftColumn>
            </Container>

        );
    }
}
export default Signup;