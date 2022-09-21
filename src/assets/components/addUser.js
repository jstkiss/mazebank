const name = document.getElementById("name");

const account = document.getElementById("account");

const rib = document.getElementById("rib");

const sold = document.getElementById("sold");

const nameInput = document.getElementById("name-input");

const accountInput = document.getElementById("account-input");

const ribInput = document.getElementById("rib-input");

const soldInput = document.getElementById("sold-input");

sub.addEventListener('click', () => {
    const value = soldInput.value;
    const soldValue = Number(sold.innerHTML) + Number(value);
    sold.innerHTML = soldValue;
});


// const input = getElementById("submit-input")
// const span = getElementById("submit-resulta")
// const btn = getElementById("submit-test")

// let sold = 0

// input.addEventListener("click", () => {
//     let v = parseInt(input.value);
//     let r = sold += v;
//     span.innerHTML = `Montant : ${r}`
// })

// class test {
//     constructor(sold) {
//         this.sold = sold;
//     }
// }

// let user = new test(input.valu);