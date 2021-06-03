import React, { useState, useEffect } from "react";
import SupplierModel from "../../../Models/SupplierModel";
import Loader from "../../Loader/Loader";
import axios from "axios";
import SupplierCard from "../Supplier/SupplierCard/SupplierCard";
interface SupplierListState {
  suppliers?: SupplierModel[];
}
export default function SupplierList() {
  let [list, setList] = React.useState<SupplierModel[]>([
    { contactName: "shmulik" },
  ]);

  useEffect(() => {
    try {
      async function CallSuppliersApi() {
        const response = await axios.get<SupplierModel[]>(
          "https://northwind.vercel.app/api/suppliers"
        );
        const newArr: SupplierModel[] = [];
        response.data.map((supplier) => {
          newArr.push(supplier);
        });
        setList((list = newArr));
      }
      CallSuppliersApi();
    } catch (eror) {
      console.error(eror);
    }
  }, [setList]);

  return (
    <div className="supplier-list Home">
      {list?.length === 0 && <Loader />}
      {list.map((supplier) => {
        <SupplierCard
          contactName={supplier.contactName}
          companyName={supplier.companyName}
        />;
      })}
    </div>
  );
}
