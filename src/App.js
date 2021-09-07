import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideBar } from "./components/SiderBar";
import { SiderBar2 } from "./components/SiderBar2";
import ResponsiveDrawer from "./components/SiderDemo";
import Dashboard from "./components/Header/Pages/DashBoard";
import Payment from "./components/Header/Pages/Payment";
import UserSettings from "./components/Header/Pages/UserSettings";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Router>
        <AppBody>
          <Switch>
            <SiderBar2 />
            {/* <Route exact path="/" component={Dashboard} />
            <Route exact path="/pay" component={Payment} />
            <Route exact path="/setting" component={UserSettings} />
            <Route exact path="/" component={Dashboard} /> */}
          </Switch>
        </AppBody>
      </Router>
    </>
  );
};
export default App;

const AppBody = styled.div`
  display: flex;
`;
