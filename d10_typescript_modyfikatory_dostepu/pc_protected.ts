class PcProtected {
    protected isOn = false; //nie chcemy, żeby ktoś zrobił bartekComputer.isOn = true

    constructor(
        private cpu: string, //nie chcemy, żeby ktoś grzebał w zmiennych tylko używał metody do zmiany
        private ram: number, //nie chcemy, żeby ktoś grzebał w zmiennych tylko używał metody do zmiany
    ) {

    }

    on() {
        console.log('Loading BIOS');
        if (!this.cpu) {
            throw new Error('CPU is lacking.')
        }
        this.isOn = true;
    }

    changeCpu(newCpu: string) {
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