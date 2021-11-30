import { Switch, Route } from "react-router-dom";
import { lazy } from "react";
import LazyLoading from "../_common/LazyLoading/LazyLoading";

const About = lazy(() => import("../About"));
const TodoList = lazy(() => import("../TodoList"));
const Login = lazy(() => import("../Login"));

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={LazyLoading(Login)} />
      <Route exact path="/" component={LazyLoading(TodoList)} />
      <Route exact path="/about" component={LazyLoading(About)} />
    </Switch>
  );
};

export default MainRoutes;
