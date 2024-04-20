import React from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useUser } from '../../hooks/UserContext'
import Button from '../../components/Button'
import api from '../../services/api'
import { Container, Background, LoginImage, ContainerItens, P, Input, SignInLink, ErrorMessage } from './styles'
import Logo from "../../assets/logo.png"


function Login() {

  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatória').min(6, 'A senha deve ter 6 digítos'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('session', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu e-mail e senha'
      }
    )

    putUserData(data)
  }

  return (
    <Container>
      <Background>
        <LoginImage src={Logo} alt='logo-burger' />
      </Background>
      <ContainerItens>
        <h1>Olá, seja bem vindo ao <span>Dev Burguer!</span></h1>
        <h1>Acesse com seu <span>Login e senha.</span></h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <P>Email</P>
          <Input type='email' {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <P>Senha</P>
          <Input type='password' {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 40 }}>ENTRAR</Button>
        </form>
        <SignInLink>Não possui conta? <Link style={{color: 'white'}} to='/cadastro'>Clique aqui.</Link></SignInLink>

      </ContainerItens>
    </Container>
  )
}

export default Login