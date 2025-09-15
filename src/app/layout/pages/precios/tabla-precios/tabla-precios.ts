import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreciosService } from '../precios.service';

import { Observable } from 'rxjs';
import { DestinatarioPlan, Plan } from '../../../../interfaces/precios.interface';


@Component({
  selector: 'app-tabla-precios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-precios.html',
  styles: [`
    .sticky-header {
      position: sticky;
      top: 0;
      z-index: 10;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .plan-card {
      transition: all 0.3s ease;
      background: var(--color-blue-100);
      border-radius: 0.5rem;
      overflow: visible;
      z-index: 1;
    }
    
    .plan-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      z-index: 20;
    }
    
  `]
})
export class TablaPrecios {
  private _destinatario: DestinatarioPlan = 'autonomo';

  @Input()
  set destinatario(value: DestinatarioPlan) {
    if (this._destinatario !== value) {
      this._destinatario = value;
      this.actualizarPlanes();
    }
  }
  get destinatario(): DestinatarioPlan {
    return this._destinatario;
  }

  planes: Plan[] = [];
  caracteristicas: string[] = [];
  columnas: string[] = ['Característica'];
  isLoading = false;

  preciosService = inject(PreciosService);

  ngOnInit() {
    this.actualizarPlanes();
  }

  actualizarPlanes(): void {
    this.isLoading = true;
    this.preciosService.getPlanesPorDestinatario(this.destinatario).subscribe({
      next: (planes) => {
        this.planes = planes;
        this.actualizarColumnas();
        this.actualizarCaracteristicas();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar los planes:', error);
        this.isLoading = false;
      }
    });
  }

  private actualizarColumnas(): void {
    this.columnas = ['Característica', ...this.planes.map(plan => plan.nombre)];
  }

  private actualizarCaracteristicas(): void {
    const todasCaracteristicas = new Set<string>();
    this.planes.forEach(plan => {
      Object.keys(plan.caracteristicas).forEach(caracteristica => {
        todasCaracteristicas.add(caracteristica);
      });
    });
    this.caracteristicas = Array.from(todasCaracteristicas);
  }

  getCaracteristica(plan: Plan, caracteristica: string): string | boolean | number {
    return plan.caracteristicas[caracteristica] ?? '-';
  }

  getPrecioFormateado(precio: number): string {
    return precio.toFixed(2).replace('.', ',');
  }
}
