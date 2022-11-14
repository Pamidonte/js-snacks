let array = ["Luigi", "Mario", "Wario", "Zelda", "Link", "Ganon"];
let nome = prompt("inserisci il tuo nome");
let flag = false;

for (let i = 0; i < array.length; i++) {
    if (nome == array[i]) {
        flag = true;

    }
};

if (flag) {
    console.log("puoi entrare");
} else console.log("non puoi entrare");









