import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AosService } from '../../../shared/services/aos.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styles: ``
})
export class About implements OnInit, AfterViewInit {

  constructor(private aosService: AosService) {}

  ngOnInit(): void {
    // Initialize AOS using the centralized service
    this.aosService.initializeAOS();
  }

  ngAfterViewInit(): void {
    // Refresh AOS to detect new elements after view initialization
    setTimeout(() => {
      this.aosService.refreshAOS();
    }, 100);
  }
}
