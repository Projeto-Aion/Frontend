import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-perfil-padrao',
  templateUrl: './perfil-padrao.component.html',
  styleUrls: ['./perfil-padrao.component.css']
})
export class PerfilPadraoComponent implements OnInit {

  user: Usuario = new Usuario()

  nome = environment.nome
  foto = environment.foto
  usuario = environment.usuario
  telefone = environment.telefone
  tipo = environment.tipo
  idUser = environment.id

  key = 'data' // criação de variáveis (key e reverse) para ordenação das postagens
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema ()
  listTema: Tema []

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private tService: TemaService,
  ) { }

  ngOnInit() {
    if(environment.token == '') {          //SE EU DER UM ATUALIZAR TEM QUE VOLTAR PRO LOGIN
      this.router.navigate(['/login'])
    }
    this.getAllTemas()
    this.getAllPostagens()
    this.findByIdUser()
    this.authService.refreshToken()

  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  getAllTemas() {
    this.tService.getAllTema().subscribe((resp: Tema[]) => {
      this.listTema = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

}
