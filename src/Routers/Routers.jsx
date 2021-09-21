import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Form from "../pages/Form/Form";
import { useState } from "react";

const Routers = () => {
  const [logado, setLogado] = useState(false);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Form setLogado={setLogado} />
        </Route>
        <Route path="/home/:name">
          <Home from logado={logado} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routers;
