import { useState } from "react";

type Transaction = number;

interface TransactionProps {
  transaction: number;
  transactionSum: number;
  transactionsList: Transaction[];
}

export const useTransactionCalculation = (
  newTransaction: number,
  transactionsList: number[],
  transactionSum: number
) => {
  transactionSum += newTransaction;
  transactionsList = [...transactionsList, newTransaction];
  return [transactionSum, transactionsList];
};
