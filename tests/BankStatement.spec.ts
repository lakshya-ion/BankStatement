import { BankAccount } from "../src/BankAccount";
import { BankStatement } from "../src/BankStatement";

describe("Statement", () => {
  it("should match the exact console.log output", () => {
    const testAccount = new BankAccount();
    const testStatement = new BankStatement(testAccount);

    const logs: string[] = [];
    const consoleSpy = jest.spyOn(console, "log").mockImplementation((msg) => {
      logs.push(msg);
    });
    testAccount.deposit(500.0);
    testAccount.withdraw(200.0);
    testAccount.withdraw(300.0);
    testAccount.deposit(100.0);

    testStatement.printStatement();

    expect(logs).toEqual([
      "Date | Amount | Balance",
      "2025-03-20 | +500.00 | 500.00",
      "2025-03-20 | -200.00 | 300.00",
      "2025-03-20 | -300.00 | 0.00",
      "2025-03-20 | +100.00 | 100.00",
    ]);

    consoleSpy.mockRestore();
  });
});
