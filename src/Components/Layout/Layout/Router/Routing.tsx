import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../Home/Home";
import Products from "../../Menu/Products/Products";
import Success from "../../Menu/Success/Success";
import NotFound from "../../Layout/NotFound/NotFound";
import Loadable from "react-loadable";
import Loader from "../../../Loader/Loader";
import SupplierList from "../../Supplier/SupplierList";
const LoadableComponent = Loadable({
  loader: () => import("../../Menu/AboutUs/AboutUs"),
  loading: Loader,
});
export default function Routing() {
  return (
    <div className="routing">
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/Success" component={Success} />
        <Route path="/Suppliers" component={SupplierList} />
        <Route path="/AboutUs" component={LoadableComponent} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
