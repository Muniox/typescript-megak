class Pc {
    constructor(cpu, //nie chcemy, żeby ktoś grzebał w zmiennych tylko używał metody do zmiany
    ram) {
        this.cpu = cpu;
        this.ram = ram;
        this.isOn = false; //nie chcemy, żeby ktoś zrobił bartekComputer.isOn = true
    }
    on() {
        console.log('Loading BIOS');
        if (!this.cpu) {
            throw new Error('CPU is lacking.');
        }
        this.isOn = true;
    }
    changeCpu(newCpu) {
        if (newCpu === '') {
            throw new Error('CPU is required');
        }
        this.cpu = newCpu;
    }
}
const bartekComputer = new Pc('486SX', 256);
// bartekComputer.isOn = true; //uruchamiam komputer bez załadowania biosu :)
// bartekComputer.cpu = 'Pentium 4' //zmieniam sobie cpu, na jakie chce bez użycia metody
bartekComputer.changeCpu('Athlon X1');
bartekComputer.on();
console.log(bartekComputer);
//# sourceMappingURL=pc.js.map