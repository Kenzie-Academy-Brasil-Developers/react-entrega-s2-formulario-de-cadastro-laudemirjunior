import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Planet from ".././../images/planet.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${Planet})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
    width: "310px",
    height: "500px",
    background: "rgba( 255, 255, 255, 0.6 )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.6 )",
  },
});

function Form({ setLogado }) {
  const [obj, setObj] = useState([]);
  const classes = useStyles();

  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches("[A-Z][a-z].* [A-Z][a-z].*", "Deve haver somente letras"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .matches(
        "^[a-z0-9][-_.+!#$%&'*/=?^`{|]{0,1}([a-z0-9][-_.+!#$%&'*/=?^`{|]{0,1})*[a-z0-9]@[a-z0-9][-.]{0,1}([a-z][-.]{0,1})*[a-z0-9].[a-z0-9]{1,}([.-]{0,1}[a-z]){0,}[a-z0-9]{0,}$",
        "E-mail inválido"
      ),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .matches("(?=.*?[A-Z])", "Deve haver pelo menos uma letra maiúscula")
      .matches("(?=.*?[a-z])", "Deve haver pelo menos uma letra minúscula")
      .matches("(?=.*?[0-9])", "Deve haver pelo menos um dígito")
      .matches(
        "(?=.*?[#?!@$%^&*-])",
        "Deve haver pelo menos um caractere especial"
      )
      .matches(".{8,}", "Deve haver no mínimo oito caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirmação da senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas devem corresponder"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setObj(data);
    console.log(data);
    setLogado(true);
    history.push("/home");
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmitFunction)} className={classes.form}>
        <h3>Formulário</h3>
        <TextField
          label="Nome"
          placeholder="Digite seu nome"
          type="text"
          {...register("name")}
          helperText={errors.name?.message}
          error={!!errors.name}
        />
        <TextField
          label="E-mail"
          placeholder="Digite seu e-mail"
          type="email"
          {...register("email")}
          helperText={errors.email?.message}
          error={!!errors.email}
        />
        <TextField
          label="Senha"
          placeholder="Digite uma senha"
          {...register("password")}
          type="password"
          helperText={errors.password?.message}
          error={!!errors.password}
        />
        <TextField
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
          type="password"
          helperText={errors.confirmPassword?.message}
          error={!!errors.confirmPassword}
        />
        <Button type="submit" variant="contained" color="secondary">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Form;
