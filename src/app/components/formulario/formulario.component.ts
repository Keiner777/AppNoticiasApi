import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  @Output() parametroSelecionado = new EventEmitter<any>()
  CategoriaSelect = 'General'
  PaisSelect = 'Co'
  categorias: any[] = [
    {value: 'General', nombre: 'Genenal'},
    {value: 'Business', nombre: 'Negocios'},
    {value: 'Entertainment', nombre: 'Emtretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'sport', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'},
  ]

  pais: any[] = [
    {value: 'Ar', nombre: 'Argentina'},
    {value: 'Co', nombre: 'Colombia'},
    {value: 'Fr', nombre: 'Francia'},
    {value: 'Hu', nombre: 'Hungria'},
    {value: 'Mx', nombre: 'Mexico'},
    {value: 'Gb', nombre: 'Reino Unido'},
  ]
  constructor() { }

  ngOnInit(): void {
  }


  buscarNoticias(){
    const PARAMETROS ={
      categoria: this.CategoriaSelect,
      pais: this.PaisSelect
    }

    this.parametroSelecionado.emit(PARAMETROS);
  }

}
