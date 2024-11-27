import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSour, MatTableModule };
import { MatPaginatorModule };
import { Mina } from '../model/mina';

@Component({
  selector: 'app-aparcana-listar',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './aparcana-listar.component.html',
  styleUrl: './aparcana-listar.component.css'
})
export class AparcanaListarComponent {
  displayedColums: string[] = ['nombre','fechaInicio', 'tipo'];
  dataSource = new MatTableDataSour<Mina>();

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private minaService: MinaService, private router: Router);
}


