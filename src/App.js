import "./App.css";
import handleSubmit from "./handles/handlesubmit";
import { useRef } from "react";
import React from "react";
import Layout from "./components/Layout";
import Blog from "./containers/Blog/Blog";
import BlogDetail from "./containers/BlogDetail/BlogDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };
  return (
    <Layout>
      <Switch>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/detail/:blogId" component={BlogDetail} />
      </Switch>
    </Layout>
  );
}

export default App;

/*
<form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
*/
