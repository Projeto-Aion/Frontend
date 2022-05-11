import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';;
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://projeto-aion.herokuapp.com/usuarios/cadastrar', usuario)
  }

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<Usuario>('https://projeto-aion.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
  }

  logado() {
    let ok: boolean = false

    if(environment.token != '') {
      ok = true
    }

    return ok
  }

}

