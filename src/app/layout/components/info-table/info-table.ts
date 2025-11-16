import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-table',
  imports: [CommonModule],
  templateUrl: './info-table.html',
  styles: ``
})
export class InfoTable {
  infoRows = [
    {
      title: 'Emisi\u00F3n Verifactu',
      description: 'Cumple con todos los requisitos t\u00E9cnicos y legales.'
    },
    {
      title: 'Automatizaci\u00F3n de facturas recurrentes',
      description: 'Programa facturas peri\u00F3dicas o duplica modelos existentes.'
    },
    {
      title: 'Facturaci\u00F3n en nombre de clientes',
      description: 'Emite facturas por cuenta de tus clientes.'
    },
    {
      title: 'Entorno borrador',
      description: 'Prepara y revisa facturas antes de emitirlas oficialmente.'
    },
    {
      title: 'Prevenci\u00F3n de errores',
      description: 'Avisa de datos incompletos o formatos incorrectos.'
    },
    {
      title: 'Gesti\u00F3n centralizada de clientes',
      description: 'Unifica toda la facturaci\u00F3n en un solo programa.'
    },
    {
      title: 'Acceso multiusuario con roles',
      description: 'Asigna accesos diferenciados a empleados o colaboradores.'
    },
    {
      title: 'Integraci\u00F3n contable',
      description: 'Importa o exporta datos compatibles con los principales programas contables.'
    },
    {
      title: 'Informes personalizados',
      description: 'Genera reportes de facturaci\u00F3n, ingresos y clientes.'
    },
    {
      title: 'Accesibilidad',
      description: 'Adaptado a cualquier dispositivo (ordenador, m\u00F3vil, tablet...).'
    }
  ];

  showAll = false;

  get visibleRows() {
    return this.showAll ? this.infoRows : this.infoRows.slice(0, 3);
  }

  toggleRows() {
    this.showAll = !this.showAll;
  }
}
