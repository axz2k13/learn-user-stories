interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

export default class Bank {
    private accounts: BankAccount[] = []

    /**
    * Method to find account if exists
    * @param {string} accountNumber number of account to look for
    * @returns whether the account exists or not
    */
    private findAccount(accountNumber: string): boolean {
        return this.accounts.find(account => account.accountNumber === accountNumber) === undefined
    }

    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber)
        if(isAccExists) {
            throw new Error("Account already exists")
        }
        return {
            name: name, age: age, accountNumber: accountNumber, balance: 0
        }
    }
}