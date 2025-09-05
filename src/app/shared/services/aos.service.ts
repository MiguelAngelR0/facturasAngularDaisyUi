import { Injectable } from '@angular/core';
import AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AosService {
  private isInitialized = false;

  initializeAOS(): void {
    if (!this.isInitialized) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: true, // Animate only once to prevent reverse animations
        offset: 100,
        delay: 0,
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        anchorPlacement: 'top-bottom'
      });
      this.isInitialized = true;
    }
  }

  refreshAOS(): void {
    if (this.isInitialized) {
      AOS.refresh();
    }
  }

  resetAOS(): void {
    this.isInitialized = false;
  }
}
