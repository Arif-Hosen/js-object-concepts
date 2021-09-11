const student = {
    id: 202,
    name: 'Rj Kibria',
    balance: 6000,
    major: 'mathemetics',
    subjects: ['english', 'economic', 'global studies'],
    bestfriends: {
        name: 'Akkas',
        major: 'mathemetics'
    },
    takeExam: function () {
        console.log(this.name, 'taking Exam');
    },
    treatDey: function (expense, boksis) {
        this.balance = this.balance - expense - boksis;
        return this.balance;
    }
}
student.takeExam();
const remaining1 = student.treatDey(500, 100);
const remaining2 = student.treatDey(400, 50);
console.log(remaining2);
