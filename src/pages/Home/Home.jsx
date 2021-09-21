import { useHistory } from "react-router-dom";

const Home = ({ logado }) => {
  const history = useHistory();

  if (!logado) {
    history.push("/");
  }

  return <div>test</div>;
};
export default Home;
