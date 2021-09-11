const Kibria = {
    id: 202,
    money: 5000,
    name: 'Rj Kibria',

    treat: () => {
        console.log(this);
    },

    treatInside: function () {
        const treatHobe = () => console.log(this);
        treatHobe();
    },
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

function add() {
    console.log(this);
}