import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
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
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/login'])
  }
  this.auth.refreshToken()
}

logar() {
  this.auth.logar(this.usuarioLogin).subscribe({
    next: (resp: UsuarioLogin) => {
      this.usuarioLogin = resp;
      // alert('Usuario Logado com sucesso');

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.nickname = this.usuarioLogin.nickname
      environment.foto = this.usuarioLogin.foto
      environment.telefone = this.usuarioLogin.telefone
      environment.id = this.usuarioLogin.id
      environment.tipo = this.usuarioLogin.tipo


      this.router.navigate(['/inicio'])
    }, 
    error: (error) => {
      if (error.status == 401) {
        alert('Usuário e/ou senha inválidos');

      }
    },
  });
}
}
