import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { DivFormStyle } from "./style";
import { loginSchema } from "../../Schema/loginSchema.js";
import HeaderLogin from "../../components/HeaderLogin";
import { UserContext } from "../../contexts/UserContext";

const LoginPage = () => {
  const {userLogin, loading} = useContext(UserContext)
  // const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submitLogin = async (data) => {
    await userLogin(data)
    // if(localStorage.getItem('@TOKEN')){
    //   setTimeout(() => {
    //     navigate('/dashboard')
    //   }, 2000)
    //   reset()
    // }else{
    // setTimeout(() => {
    //   navigate('/')
    // }, 2000)
    // reset()
    // }
  }

  return (
    <>
    <HeaderLogin />
      <DivFormStyle>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(submitLogin)} noValidate>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          />
          <div>{errors.email && <span>{errors.email.message}</span>}</div>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <div>{errors.password && <span>{errors.password.message}</span>}</div>

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div>
          <p>Ainda não possui uma conta?</p>
          <Link to={`/register`}>Cadastre-se</Link>
        </div>
      </DivFormStyle>
    </>
  );
};

export default LoginPage;
