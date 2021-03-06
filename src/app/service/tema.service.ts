import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://projeto-aion.herokuapp.com/temas', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://projeto-aion.herokuapp.com/temas/${id}`, this.token)
  }

  getByNomeTema(categoria: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://projeto-aion.herokuapp.com/temas/categoria/${categoria}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://projeto-aion.herokuapp.com/temas', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://projeto-aion.herokuapp.com/temas', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://projeto-aion.herokuapp.com/temas/${id}`, this.token)
  }
}
