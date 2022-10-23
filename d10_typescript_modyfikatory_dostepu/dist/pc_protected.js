class PcProtected {
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
const bartekComputerProtected = new PcProtected('486SX', 256);
// bartekComputer.isOn = true; //uruchamiam komputer bez załadowania biosu :)
// bartekComputer.cpu = 'Pentium 4' //zmieniam sobie cpu, na jakie chce bez użycia metody
bartekComputerProtected.changeCpu('Athlon X1');
bartekComputerProtected.on();
console.log(bartekComputerProtected);
//# sourceMappingURL=pc_protected.js.map