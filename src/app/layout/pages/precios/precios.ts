import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPrecios } from "./hero-precios/hero-precios";
import { AutonomoPrecio } from "./autonomo-precio/autonomo-precio";
import { PymePrecio } from "./pyme-precio/pyme-precio";
import { ContabilidadPrecio } from "./contabilidad-precio/contabilidad-precio";
import { TablaPrecios } from "./tabla-precios/tabla-precios";

type Tab = {
  id: string;
  label: string;
};

@Component({
  selector: 'app-precios',
  standalone: true,
  imports: [
    CommonModule,
    HeroPrecios,
    AutonomoPrecio,
    PymePrecio,
    ContabilidadPrecio,
    TablaPrecios
  ],
  templateUrl: './precios.html',
  styles: `
    .tab-active {
      color: var(--color-primary);
      border-bottom-color: var(--color-primary);
    }
  `
})
export class Precios {
  activeTab = signal<string>('autonomo');

  tabs: Tab[] = [
    { id: 'autonomo', label: 'Autónomos' },
    { id: 'pymes', label: 'PYMES' },
    { id: 'contabilidad', label: 'Contabilidad' }
  ];

  setActiveTab(tabId: string): void {
    this.activeTab.set(tabId);
  }
}
