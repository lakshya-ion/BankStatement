import { BankAccount } from "./BankAccount";

export function printStatement(account: BankAccount): void {
  console.log("Date | Amount | Balance");
  account.getTransactionHistory().forEach((log) => {
    console.log(`${log.date} | ${log.amount} | ${log.balance}`);
  });
}
