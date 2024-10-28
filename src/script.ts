class CountdownTimer {
    private countdownDisplay: HTMLElement;
    private timerId?: number; // Para almacenar el ID del temporizador
    private timeLeftInSeconds: number;

    constructor(initialTimeInDays: number) {
        this.countdownDisplay = document.getElementById('countdown') as HTMLElement;
        this.timeLeftInSeconds = initialTimeInDays * 24 * 60 * 60; // Convertir días a segundos

        this.setupEventListeners();
        this.updateDisplay();
    }

    private setupEventListeners(): void {
        const startBtn = document.getElementById('start');
        const resetBtn = document.getElementById('reset');

        if (startBtn && resetBtn) {
            startBtn.addEventListener('click', () => this.start());
            resetBtn.addEventListener('click', () => this.reset());
        }
    }

    private updateDisplay(): void {
        const days = Math.floor(this.timeLeftInSeconds / (24 * 60 * 60));
        const hours = Math.floor((this.timeLeftInSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((this.timeLeftInSeconds % (60 * 60)) / 60);
        const seconds = this.timeLeftInSeconds % 60;

        this.countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (this.timeLeftInSeconds <= 0) {
            clearInterval(this.timerId);
            alert("¡Tiempo terminado!");
        }
    }

    private start(): void {
        if (this.timerId) return; // Evitar múltiples temporizadores

        this.timerId = window.setInterval(() => {
            if (this.timeLeftInSeconds > 0) {
                this.timeLeftInSeconds--;
                this.updateDisplay();
            } else {
                clearInterval(this.timerId);
            }
        }, 1000);
    }

    private reset(): void {
        clearInterval(this.timerId);
        this.timeLeftInSeconds = 14 * 24 * 60 * 60; // Reiniciar a dos semanas
        this.updateDisplay();
        this.timerId = undefined; // Limpiar el ID del temporizador
    }
}

// Inicializar el temporizador cuando se carga la página
window.addEventListener('DOMContentLoaded', () => {
    new CountdownTimer(14); // Iniciar con dos semanas
});