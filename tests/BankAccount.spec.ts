import { BankAccount } from "../src/BankAccount";
// import BankStatement from "../src/BankStatement";

describe("BankAccount", () => {
  it("The balance should be updated on depositing money", () => {
    const testAccount = new BankAccount(); // by default should have 0 balance
    //prettier-ignore
    const testArr = [
      { depositAmount: 500.00, expectedBal: 500.00 },
      { depositAmount: 500.00, expectedBal: 1000.00 },
      { depositAmount: 500.00, expectedBal: 1500.00 },
      { depositAmount: 0, expectedBal: 1500.00 },
    ];
    testArr.forEach((val) => {
      testAccount.deposit(val.depositAmount);
      expect(testAccount.getBalance()).toBe(val.expectedBal);
    });
  });

  it("the balance should be updated on withdrawing money", () => {
    const testAccount = new BankAccount(10000); // by default should have 10000 balance
    //prettier-ignore
    const testArr = [
      { withdrawAmount: 500.00, expectedBal: 9500.00 },
      { withdrawAmount: 1500.00, expectedBal: 8000.00 },
      { withdrawAmount: 500.00, expectedBal: 7500.00 },
      { withdrawAmount: 0, expectedBal: 7500.00 },
    ];
    testArr.forEach((val) => {
      testAccount.withdraw(val.withdrawAmount);
      expect(testAccount.getBalance()).toBe(val.expectedBal);
    });
  });
});
