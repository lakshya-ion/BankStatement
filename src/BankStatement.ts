import { BankAccount } from "./BankAccount";
export class BankStatement {
  private account: BankAccount;

  constructor(account: BankAccount) {
    this.account = account;
  }

  printStatement(): void {
    console.log("Date | Amount | Balance");
    this.account.getLogs().forEach((log) => {
      console.log(`${log.date} | ${log.amount} | ${log.balance}`);
    });
  }
}
