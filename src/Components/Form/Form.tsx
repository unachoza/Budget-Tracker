import React, { useState } from "react";
import "./Form.styles.css";

interface FormValues {
  type: string;
  category: string;
  amount: number | string;
  date: string;
}
const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({ type: "", category: "", amount: "", date: "" });

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
        <label>Type</label>
        <input name="type" type="text" value={formValues.type} placeholder="" onChange={(e) => handleInputChange(e)} />
        <label>Category</label>
        <input
          name="category"
          type="text"
          value={formValues.category}
          placeholder=""
          onChange={(e) => handleInputChange(e)}
        />
        <label>Amount</label>
        <input
          name="amount"
          type="text"
          value={formValues.amount}
          placeholder=""
          onChange={(e) => handleInputChange(e)}
        />
        <label>Date</label>
        <input name="date" type="text" value={formValues.date} placeholder="" onChange={(e) => handleInputChange(e)} />
      </div>
    </div>
  );
};

export default Form;
