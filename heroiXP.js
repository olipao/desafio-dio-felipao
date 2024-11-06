// Variáveis
let nomeHeroi = "Aventurier";  // Defina o nome do herói
let xpHeroi = 7500;            // Defina a quantidade de XP do herói

// Variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão para determinar o nível do herói com base no XP
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
