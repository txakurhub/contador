class Counter {
    private count: number = 0;
    private countDisplay: HTMLElement;
  
    constructor() {
      this.countDisplay = document.getElementById("count") as HTMLElement;
      this.setupEventListeners();
    }
  
    private setupEventListeners(): void {
      const decreaseBtn = document.getElementById("decrease");
      const resetBtn = document.getElementById("reset");
      const increaseBtn = document.getElementById("increase");
  
      if (decreaseBtn && resetBtn && increaseBtn) {
        decreaseBtn.addEventListener("click", () => this.decrease());
        resetBtn.addEventListener("click", () => this.reset());
        increaseBtn.addEventListener("click", () => this.increase());
      }
    }
  
    private updateDisplay(): void {
      this.countDisplay.textContent = this.count.toString();
    }
  
    private decrease(): void {
      this.count--;
      this.updateDisplay();
    }
  
    private reset(): void {
      this.count = 0;
      this.updateDisplay();
    }
  
    private increase(): void {
      this.count++;
      this.updateDisplay();
    }
  }
  
  // Inicializar el contador cuando se carga la página
  window.addEventListener("DOMContentLoaded", () => {
    new Counter();
  });