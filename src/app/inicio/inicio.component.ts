import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

import { Tema } from '../model/Tema';
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
  tema: Tema = new Tema ()
  listTema: Tema []
  idTema: number
  idPostagem: number


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private pService: PostagemService,
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

  findByIdTema(){
    this.tService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findAllTema() {
    this.tService.getAllTema().subscribe((resp: Tema[])=>{
      this.listTema = resp
    })
  }


}