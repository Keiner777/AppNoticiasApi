import { Component } from '@angular/core';

import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  listNoticiasPadre: any[] = []

  loading = false;
  constructor(private _noticiaService: NoticiaService){

  }
  buscarNoticiasPadre(parametros: any){

    this.loading = true;
    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data =>{
        this.loading = false;
        this.listNoticiasPadre = data.articles;
      }, error=>{
        console.log(error)
        this.loading = false;
      })
    }, 2000);
    
  }
}
