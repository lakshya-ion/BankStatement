import { BankAccount } from "../src/BankAccount";
// import BankStatement from "../src/BankStatement";

describe("BankAccount", () => {
  let testAccount;

  beforeEach(() => {
    testAccount = new BankAccount(); // Fresh instance for each test
  });

  it("The balance should be updated on depositing money", () => {
    //prettier-ignore
    const testArr = [
      { depositAmount: 500.00, expectedBal: 500.00 },
      { depositAmount: 500.00, expectedBal: 1000.00 },
      { depositAmount: 500.00, expectedBal: 1500.00 },
      { depositAmount: 0, expectedBal: 1500.00 },
      { depositAmount: 20.250, expectedBal: 1520.25 },
    ];
    testArr.forEach((val) => {
      testAccount.deposit(val.depositAmount);
      expect(testAccount.getBalance()).toBe(val.expectedBal);
    });
  });

  it("the balance should be updated on withdrawing money", () => {
    testAccount.deposit(10000);
    //prettier-ignore
    const testArr = [
      { withdrawAmount: 500.00, expectedBal: 9500.00 },
      { withdrawAmount: 1500.00, expectedBal: 8000.00 },
      { withdrawAmount: 500.00, expectedBal: 7500.00 },
      { withdrawAmount: 0, expectedBal: 7500.00 },
      { withdrawAmount: 749.5, expectedBal: 6750.50 },
    ];
    testArr.forEach((val) => {
      testAccount.withdraw(val.withdrawAmount);
      expect(testAccount.getBalance()).toBe(val.expectedBal);
    });
  });
  //handling edge cases
  it("Shouldn't withdraw money if the balance is less than the requested amount", () => {
  testAccount.deposit(1000);
    const amount = 1500;
    expect(() => testAccount.withdraw(amount)).toThrow("Insufficient funds");
  });
  it("Shouldn't accept any negative deposits and withdrawals", () => {
   testAccount.deposit(100000);
    const depositAmount = -500;
    const withdrawAmount = -500;
    expect(() => {
      testAccount.deposit(depositAmount);
    }).toThrow("Can't have a negative deposit amount");
    expect(() => {
      testAccount.withdraw(withdrawAmount);
    }).toThrow("Can't have a negative withdraw amount");
  });
});
