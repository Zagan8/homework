import React from "react";
import "../Layout/Layout.css";
import Box from "@material-ui/core/Box";
import Header from "../Header/Header";
import Menu from "../Menu/Menu/Menu";
import Copyrights from "../Copyrights/Copyrights";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routing from "../Layout/Router/Routing";

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: { width: "70rem", height: "40rem" },
  borderColor: "text.primary",
};

export default function Layout(): JSX.Element {
  return (
    <Router>
      <Box display="flex" justifyContent="center">
        <Box border={2} {...defaultProps}>
          <Header />
          <Menu />
          <Routing />
          <Copyrights />
        </Box>
      </Box>
    </Router>
  );
}
