import React from 'react'
import { useForm } from "react-hook-form"

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '../../components/Button'
import api from '../../services/api'
import { Container, Background, LoginImage, ContainerItens, P, Input, ErrorMessage } from './styles'
import Logo from "../../assets/logo.png"


function Register() {

  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatória').min(6, 'A senha deve ter 6 digítos'),
    comfirmPassword: Yup.string().required('Senha é obrigatória').oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
  }

  return (
    <Container>
      <Background>
        <LoginImage src={Logo} alt='logo-burger' />
      </Background>
      <ContainerItens>
        <h1>Criar conta</h1>


        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <P>Name</P>
          <Input type='text' {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <P>Email</P>
          <Input type='email' {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <P>Senha</P>
          <Input type='password' {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <P>Confirmar senha</P>
          <Input type='password' {...register("comfirmPassword")} error={errors.comfirmPassword?.message} />
          <ErrorMessage>{errors.comfirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 40 }}>CONFIRMAR CADASTRO</Button>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default Register