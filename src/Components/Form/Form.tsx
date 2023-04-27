import React, { useState } from "react";
import TextInput from "../Inputs/TextInput";
import { useTransactionCalculation } from "../../Hooks/useTransactionCalculation";
import { NEW_TRANSACTION, INITIAL_TRANSACTION_LIST, INITIAL_TRANSACTION_SUM } from "../../Constants/constants";

import "./Form.styles.css";

interface FormValues {
  type: string;
  category: string;
  amount: number | string;
  date: string;
}

const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({ type: "", category: "", amount: "", date: "" });
  const [transactionSum, transactionList] = useTransactionCalculation(
    NEW_TRANSACTION,
    INITIAL_TRANSACTION_LIST,
    INITIAL_TRANSACTION_SUM
  );

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="form">
      <div className="title"></div>
      <div className="form-content">
        <TextInput label="Transaction Type" name="type" placeholder="" setFormValues={handleInputChange} />
        <TextInput label="Category" name="category" placeholder="" setFormValues={handleInputChange} />
        <TextInput label="Dollar Amount" name="amount" placeholder="" setFormValues={handleInputChange} />
        <TextInput label="Date" name="date" placeholder="" setFormValues={handleInputChange} />
      </div>
    </div>
  );
};

export default Form;
