function userCard(index) {
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];
  let key = index;

  const addNewHistoryLogs = function(operationType, credits) {
    let log = {
      operationType,
      credits,
      operationTime: new Date().toLocaleString('en-GB')
    };
    historyLogs.push(log);
  };

  const getCardOptions = function() {
    return {
      key,
      balance,
      transactionLimit,
      historyLogs
    }
  };

  const putCredits = function(value) {
    balance += value;
    addNewHistoryLogs('Received credits', value);
  };

  const takeCredits = function(value) {
    if (value > balance) {
      console.error('Your balance is not big enough.');
    } else if (value > transactionLimit) {
      console.error('Your transaction limit is not big enough.');
    } else {
      balance -= value;
      addNewHistoryLogs('Withdrawal of credits', value);
    }
  };

  const setTransactionLimit = function(value) {
    transactionLimit = value;
    addNewHistoryLogs('Transaction limit change', value);
  };

  const transferCredits = function(value, targetCard) {
    const transferTax = 0.005;
    const transfer = value * transferTax + value;
    if (transfer < balance && transfer < transactionLimit) {
      this.takeCredits(transfer);
      targetCard.putCredits(value);
    } else {
      console.error('Your balance or transaction limit is not big enough.');
    }
  };

  const userCardMethods = {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits
  };

  return userCardMethods;
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.cardsMax = 3;
  }

  addCard() {
    if (this.cards.length < this.cardsMax) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.error('You have reached the limit of cards.');
    }
  }

  getCardByKey(index) {
    return this.cards[index - 1];
  }
}

// let user = new UserAccount('Bob');
// user.addCard()
// user.addCard()
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
//
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
//
// card2.takeCredits(50);
//
// console.log(card1.getCardOptions());
// console.log(card2.getCardOptions());
