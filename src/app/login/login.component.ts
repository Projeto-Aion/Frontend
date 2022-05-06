import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  logar() {
    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.nickname = this.usuarioLogin.nickname
      environment.foto = this.usuarioLogin.foto
      environment.telefone = this.usuarioLogin.telefone
      environment.id = this.usuarioLogin.id

      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500 || erro.status == 401) {
        alert('Usuário ou senha incorretos!')
      }
    })
  }
}
