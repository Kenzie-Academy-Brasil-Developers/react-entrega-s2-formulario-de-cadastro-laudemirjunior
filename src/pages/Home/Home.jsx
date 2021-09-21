import { useHistory } from "react-router-dom";
import planet from ".././../images/planet.png";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import login from ".././../images/login.png";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${planet})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  form: {
    width: "310px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    textAlign: "center",
    lineHeight: "350%",
  },
  image: {
    backgroundImage: `url(${login})`,
    backgroundSize: "cover",
    width: "200px",
    height: "200px",
  },
});

const Home = ({ logado }) => {
  const classes = useStyles();
  const { name } = useParams();
  const history = useHistory();
  if (!logado) {
    history.push("/");
  }
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <h1 style={{ color: "white" }}>Bem-vindo, {name}</h1>
        <div className={classes.image}></div>
        <Button variant="contained" color="primary">
          <Link to="/">Voltar</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
