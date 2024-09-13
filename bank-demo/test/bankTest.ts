import Bank from "../src/bank";

//setup
const bank = new Bank()

//scenario 1
const account = bank.createAccount("John Doe", 29, "46853648653")
if(account.accountNumber === "46853648653") {
    console.log("scenario 1 passed")
} else {
    console.log("scenario 1 failed")
}

//scenario 2
try {
    const account = bank.createAccount("John Doe", 29, "46853648653")
    console.log("scenario 2 failed")
} catch {
    console.log("scenario 2 passed")
}