import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plan {
  id: number;
  nombre: string;
  precio: number;
  popular?: boolean;
  caracteristicas: {
    [key: string]: string | boolean | number;
  };
}

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
      height: 100%;
      display: flex;
      flex-direction: column;
      background: white;
      border-radius: 0.5rem;
      overflow: visible;
      position: relative;
      z-index: 1;
    }
    
    .plan-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      z-index: 20;
    }
    
    .features-container {
      position: relative;
      z-index: 2;
    }
  `]
})
export class TablaPrecios implements OnInit {
  columnas: string[] = ['Característica', 'Estándar', 'Premium'];

  planes: Plan[] = [
    {
      id: 1,
      nombre: 'Estándar',
      precio: 9.99,
      caracteristicas: {
        'Almacenamiento': '5 GB',
        'Usuarios': 1,
        'Soporte': 'Básico',
        'Seguridad': 'Básica',
        'Copias de seguridad': 'Semanal',
        'Ancho de banda': '10 GB/mes'
      }
    },
    {
      id: 3,
      nombre: 'Premium',
      precio: 49.99,
      caracteristicas: {
        'Almacenamiento': '200 GB',
        'Usuarios': 'Ilimitado',
        'Soporte': '24/7',
        'Seguridad': 'Premium',
        'Copias de seguridad': 'En tiempo real',
        'Ancho de banda': '1 TB/mes',
        'Dominio personalizado': true,
        'SSL gratuito': true
      }
    },
  ];

  caracteristicas: string[] = [];

  ngOnInit() {
    // Obtener todas las características únicas de los planes
    const todasCaracteristicas = new Set<string>();
    this.planes.forEach(plan => {
      Object.keys(plan.caracteristicas).forEach(caracteristica => {
        todasCaracteristicas.add(caracteristica);
      });
    });
    this.caracteristicas = Array.from(todasCaracteristicas);
  }

  getCaracteristica(plan: Plan, caracteristica: string): string | boolean | number {
    return plan.caracteristicas[caracteristica] || '-';
  }
}
