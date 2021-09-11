const Kibria = {
    id: 202,
    money: 5000,
    name: 'Rj Kibria',

    treatDey: function (expense) {
        this.money = this.money - expense;
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

Kibria.treatDey(200);

const heroBalamTreatdey = Kibria.treatDey.bind(heroBalam);
heroBalamTreatdey(400);

const heroGolamTreatdey = Kibria.treatDey.bind(heroGolam);
heroGolamTreatdey(1000);