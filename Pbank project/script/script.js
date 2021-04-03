
const newAccountModal = document.querySelector('#newAccountModal');
const newAccountForm = document.querySelector('#newAccountForm');
const saveButton = document.querySelector('[name="saveButton"]')
const values = [];
let cardColor;
let cardCurrency;

function retrieveFormValue() {
  let newAccountName = newAccountForm.querySelector('[name="name"]');
  let newAccountType = newAccountForm.querySelector('[name="type"]');
  let newAccountBalance = newAccountForm.querySelector('[name="balance"]');
  let newAccountСurrency = newAccountForm.querySelector('[name="currency"]');
  let newAccountColor = newAccountForm.querySelector('[name="color"]');

  values[0] = newAccountName.value;
  values[1] = newAccountType.value;
  values[2] = newAccountBalance.value;
  values[3] = newAccountСurrency.value;
  values[4] = newAccountColor.value;


  if (values[4] == '0') {
    cardColor = 'first-card'
  } else if (values[4] == '1') {
    cardColor = 'second-card'
  } else {
    cardColor = 'third-card'
  };

  if (values[3] == '0') {
    cardCurrency = '$'
  } else if (values[3] == '1') {
    cardCurrency = '€'
  } else {
    cardCurrency = '₴'
  };
  $('#newAccountForm').trigger('reset');
  $('#newAccountModal').modal('hide');
  $('.slider').slick('slickAdd', `<div><div class="${cardColor}"><div class="row"><div class="col-8"><div class="card-name">${values[0]}</div></div><div class="col-4 text-end"><div class="card-type">${values[1]}</div></div></div><div class="card-money-quantity text-end">${cardCurrency} ${values[2]}</div></div></div>`);
};

newAccountForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateAll(bal, accName)) {
    retrieveFormValue();
    resetValid(bal, accName);
  };

});


//валидация формы аккаунта

let reg = /^[0-9]{1,8}[\.,][0-9]{2}$/;
reg2 = /^[a-z]{1,10}$/;

let accName = document.querySelector('[name="name"]');
let bal = document.querySelector('[name="balance"]');
let balTextError = document.querySelector('.bal-input-error-text');
let nameTextError = document.querySelector('.name-input-error-text');
let formTextError = document.querySelector('.form-title-error-text');

function validate(regex, inp) {
  return regex.test(inp);
}

function notValid(inp, el, mess) {
  inp.classList.remove('is-valid');
  inp.classList.add('is-invalid');
  el.innerHTML = mess;
}

function valid(inp, el, mess) {
  inp.classList.remove('is-invalid');
  inp.classList.add('is-valid');
  el.innerHTML = mess;
}

function validateAll(input1, input2) {
  return input1.classList.contains('is-valid') && input2.classList.contains('is-valid');
};

function resetValid(inp1, inp2) {
  inp1.classList.remove('is-valid');
  inp1.classList.add('is-invalid');
  inp2.classList.remove('is-valid');
  inp2.classList.add('is-invalid');
}

bal.addEventListener('blur', function (event) {
  event.preventDefault();
  if (!validate(reg, bal.value)) {
    notValid(bal, balTextError, 'проверка не пройдена');
  } else {
    valid(bal, balTextError, '');
  }
});
accName.addEventListener('blur', function (event) {
  event.preventDefault();
  if (!validate(reg2, accName.value)) {
    notValid(accName, nameTextError, 'проверка не пройдена');
  } else {
    valid(accName, nameTextError, '');
  }
});

//слайдер
$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  waitForAnimate: false,
  responsive: [

    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

// новая транзакция (переключение окон)

let revenueButton = document.querySelector('#revenueButton');
let expenseButton = document.querySelector('#expenseButton');
let transferButton = document.querySelector('#transferButton');
let revenueWindow = document.querySelector('.revenue');
let expenseWindow = document.querySelector('.expense');
let transferWindow = document.querySelector('.transfer');


function switching(button, window, window2, window3) {
  button.onclick = function () {
    if (window.classList.contains('not-active')) {
      window.classList.remove('not-active')
      window.classList.add('now-active')
      setTimeout(function () {
        window.classList.add('visibly');
      }, 100);
      if (window2.classList.contains('now-active')) {
        window2.classList.remove('now-active')
        window2.classList.remove('visibly')
        window2.classList.add('not-active');
      }
      if (window3.classList.contains('now-active')) {
        window3.classList.remove('now-active')
        window3.classList.remove('visibly')
        window3.classList.add('not-active');
      }
    }
  }
};


switching(revenueButton, revenueWindow, expenseWindow, transferWindow);
switching(expenseButton, expenseWindow, transferWindow, revenueWindow);
switching(transferButton, transferWindow, expenseWindow, revenueWindow);



//получение данных из формы транзакции

const { transactionRevenueForm } = document.forms;
const { transactionExpenseForm } = document.forms;
const transactionValues = {};

function retrieveTransactionValue(form) {
  return function (event) {
    event.preventDefault();

    const { account, balance, currency, сategory, date, project, counterparty, comment } = form;

    transactionValues.account = account.value,
    transactionValues.balance = balance.value,
    transactionValues.currency = currency.value,
    transactionValues.category = сategory.value,
    transactionValues.date = date.value,
    transactionValues.project = project.value,
    transactionValues.counterparty = counterparty.value,
    transactionValues.comment = comment.value

    if (validate(reg, balance.value)) {
      form.reset();
      $('#newTransactionModal').modal('hide');
      resetVal(balance)
      createHistoryNode()
    }
  };
};

transactionRevenueForm.addEventListener('submit', retrieveTransactionValue(transactionRevenueForm));
transactionExpenseForm.addEventListener('submit', retrieveTransactionValue(transactionExpenseForm));

// валидация формы транзакции

function val(form) {
  const { balance } = form;
  const textError = form.querySelector('.textError')


  balance.addEventListener('blur', function (event) {
    event.preventDefault();
    if (!validate(reg, balance.value)) {
      notValid(balance, textError, 'проверка не пройдена');
    } else {
      valid(balance, textError, '');
    }
  });
};

function resetVal(inp) {
  inp.classList.remove('is-valid');
  inp.classList.add('is-invalid');
}

val(transactionRevenueForm);
val(transactionExpenseForm);

// создание полей history

const historyContainer = document.querySelector('#historyContainer')
const historyTransaction = document.querySelector('#historyTransaction')

function createHistoryNode() {
  let time = new Date;
  let newTransaction = historyTransaction.cloneNode(true);
  newTransaction.classList.remove('not-active')
  newTransaction.querySelector('.date').innerHTML = `${transactionValues.date}`
  newTransaction.querySelector('.time').innerHTML = `${time.getHours()} : ${time.getMinutes()}`
  newTransaction.querySelector('.purpose').innerHTML = `${transactionValues.comment}`
  newTransaction.querySelector('.counterparty').innerHTML = `${transactionValues.counterparty}`
  newTransaction.querySelector('.account').innerHTML = `${transactionValues.account}`
  newTransaction.querySelector('.category').innerHTML = `${transactionValues.category}`
  newTransaction.querySelector('.amount').innerHTML = `${transactionValues.balance} ${transactionValues.currency}`

  historyContainer.prepend(newTransaction);
}

//firebase 

