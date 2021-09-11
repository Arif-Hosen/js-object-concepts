const Kibria = {
    id: 202,
    money: 5000,
    name: 'Rj Kibria',

    treatDey: function (expense, boksis, vat) {
        this.money = this.money - expense - boksis - vat;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'

}

const heroGolam = {
    id: 103,
    money: 9000,
    name: "Hero Golam"
}
// call
// Kibria.treatDey.call(heroBalam, 400, 100, 40);
// Kibria.treatDey.call(heroBalam, 300, 100, 30);

// Kibria.treatDey.call(heroGolam, 1000, 200, 100);

//apply
Kibria.treatDey.apply(heroBalam, [500, 100, 50]);
Kibria.treatDey.apply(heroBalam, [1000, 200, 100]);

Kibria.treatDey.apply(heroGolam, [2000, 200, 200]);