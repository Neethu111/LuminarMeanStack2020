class bank {
    createAccount(name, acno, balance, b_name) {
        this.name = name;
        this.acno = acno;
        this.balance = balance;
        this.b_name = b_name;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("account credited with" + this.balace)
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insuficient balance in your account")

        }
        else {
            this.balance -=amount;
        }
    }
    balaceEnq() {
        console.log("Your account balance" + this.balance)
    }

}
var obj = new bank()
obj.createAccount("ajay", 1000, 5000, "SBI")
obj.withdraw(2000)
obj.deposit(1000)
obj.balaceEnq()