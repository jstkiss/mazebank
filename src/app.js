const deposit = document.getElementById("deposit")

const withdraw = document.getElementById("withdraw")

const balance = document.getElementById('balance');

const depositInput = document.getElementById("deposit-input");

const withdrawInput = document.getElementById("withdraw-input");

const depositBtn = document.getElementById('deposit-btn');

const withdrawBtn = document.getElementById('withdraw-btn');

// USER

const name = document.getElementById("name");

const account = document.getElementById("account");

const rib = document.getElementById("rib");

const sold = document.getElementById("sold");

const nameInput = document.getElementById("name-input");

const accountInput = document.getElementById("account-input");

const ribInput = document.getElementById("rib-input");

const soldInput = document.getElementById("sold-input");

const sub = document.getElementById("submit-user")

sub.addEventListener('click', () => {
    const value = soldInput.value;
    const soldValue = Number(sold.innerHTML) + Number(value);
    sold.innerHTML = soldValue;
    soldInput.value = ``;

})

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositValue = Number(deposit.innerHTML) + Number(value);
    const balanceValue = Number(balance.innerHTML) + Number(value);
    deposit.innerHTML = depositValue;
    balance.innerHTML = balanceValue;
    depositInput.value = '';
});

withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if (Number(value) === 0) {
        alert("Vous n'avez pas de solde à retirer");
    } else if (Number(value) > Number(balance.innerHTML)) {
        alert("Vous n'avez pas beaucoup de solde à retirer");
    } else {
        const balanceValue = Number(balance.innerHTML) - Number(value);
        const withdrawValue = Number(withdraw.innerHTML) + Number(value);
        withdraw.innerHTML = withdrawValue;
        balance.innerHTML = balanceValue;
        withdrawInput.value = '';
    }
});




