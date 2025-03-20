type logs = {
  date: string;
  amount: string;
  balance: string;
};

export class BankAccount {
  protected balance: number;
  protected logs: logs[];

  constructor(balance: number = 0) {
    this.logs = [];
    this.balance = 0;
    if (balance !== 0) {
      this.deposit(balance);
    }
  }

  getBalance(): number {
    return this.balance;
  }

  getLogs(): logs[] {
    return this.logs;
  }

  deposit(amount: number): void {
    const date = new Date().toISOString().split("T")[0];
    this.balance += amount;
    this.logs.push({
      date,
      amount: `+${amount.toFixed(2)}`,
      balance: `${this.balance.toFixed(2)}`,
    });
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    const date = new Date().toISOString().split("T")[0];
    this.balance -= amount;

    this.logs.push({
      date,
      amount: `-${amount.toFixed(2)}`,
      balance: `${this.balance.toFixed(2)}`,
    });
  }
}
