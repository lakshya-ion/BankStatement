import { BankAccount } from "../src/BankAccount";
import { printStatement } from "../src/BankStatement";

describe("Statement", () => {
  let testAccount;

  beforeEach(() => {
    testAccount = new BankAccount(); // Fresh instance for each test
  });

  it("should match the exact console.log output", () => {

    const logs: string[] = [];
    const consoleSpy = jest.spyOn(console, "log").mockImplementation((msg) => {
      logs.push(msg);
    });
    testAccount.deposit(500.0);
    testAccount.withdraw(200.0);
    testAccount.withdraw(300.0);
    testAccount.deposit(100.0);

    printStatement(testAccount);

    expect(logs).toEqual([
      "Date | Amount | Balance",
      "2025-03-24 | +500.00 | 500.00",
      "2025-03-24 | -200.00 | 300.00",
      "2025-03-24 | -300.00 | 0.00",
      "2025-03-24 | +100.00 | 100.00",
    ]);
    
    consoleSpy.mockRestore();
  });
});
