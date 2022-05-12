import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  user: Usuario = new Usuario()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private tService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      // alert('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/login'])
    }
    this.tService.refreshToken()
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

}