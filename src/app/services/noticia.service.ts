import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  
  constructor(private htpp : HttpClient) { }

  getNoticias(parametros: any):Observable<any>{

    const URL = 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais +'&category='+ parametros.categoria +'&apiKey=1b514ab2c3044e978d0fc6c664a0594a';


    return this.htpp.get(URL)

  }
}
