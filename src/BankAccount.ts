type transaction = {
  date: string;
  amount: string;
  balance: string;
};

interface Account {
  getBalance(): number;
  getTransactionHistory(): transaction[];
}

export class BankAccount implements Account {
  protected balance: number;
  protected transactions: transaction[];

  constructor(balance: number = 0) {
    this.transactions = [];
    this.balance = 0;
    if (balance !== 0) {
      this.deposit(balance);
    }
  }

  getBalance(): number {
    return this.balance;
  }

  getTransactionHistory(): transaction[] {
    return this.transactions;
  }

  deposit(amount: number): void {
    if (amount < 0) {
      throw new Error("Can't have a negative deposit amount");
    }
    const date = new Date().toISOString().split("T")[0];
    this.balance += amount;
    this.transactions.push({
      date,
      amount: `+${amount.toFixed(2)}`,
      balance: `${this.balance.toFixed(2)}`,
    });
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    if (amount < 0) {
      throw new Error("Can't have a negative withdraw amount");
    }
    const date = new Date().toISOString().split("T")[0];
    this.balance -= amount;

    this.transactions.push({
      date,
      amount: `-${amount.toFixed(2)}`,
      balance: `${this.balance.toFixed(2)}`,
    });
  }
}
