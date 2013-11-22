
ATM = { 
    createAccount: function(name, balance) {
      account = {name: name, balance: balance, createdAt: Date.now()}
      return account;
    },
    withdraw: function(account, amount) {  
        account.balance = account.balance - amount;
        return account;
      },
    deposit: function(account, amount) {  
        account.balance = account.balance + amount;
        return account;
      }
}

HanAccount = ATM.createAccount('hannah',2000);
HanAccount = ATM.withdraw(HanAccount,200);
HanAccount = ATM.deposit(HanAccount,300);
console.log(HanAccount.balance);

