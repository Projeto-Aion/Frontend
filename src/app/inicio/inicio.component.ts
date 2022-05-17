import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';
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
  tituloPost: string

  user: Usuario = new Usuario()
  idUser = environment.id

  tema: Tema = new Tema ()
  listTema: Tema []
  idTema: number

  key = 'data' // criação de variáveis (key e reverse) para ordenação das postagens
  reverse = true

  nome = environment.nome
  foto = environment.foto// do último para o primeiro


  constructor(
    private router: Router,
    private authService: AuthService,
    private alertas: AlertasService, // Injetando a dependência alertas.service.ts para poder utilizar a estilização do alerta
    private pService: PostagemService,
    private tService: TemaService
  ) { }

  ngOnInit() {

    if(environment.token == '') {          //SE EU DER UM ATUALIZAR TEM QUE VOLTAR PRO LOGIN
      this.router.navigate(['/login'])
    }
    this.authService.refreshToken()
    this.getAllTemas()
    this.getAllPostagens()
  }



  getAllTemas() {
    this.tService.getAllTema().subscribe((resp: Tema[]) => {
      this.listTema = resp
    })
  }

  findByIdTema(){
    this.tService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  getAllPostagens() {
    this.pService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens()
    } else {
      this.pService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  publicar(){
    this.tema.id = this.idTema // o postagem.tema recebe o  idTema que vem do ngMOdel
    this.postagem.tema =this.tema //o objeto postagem recebe este tema que é preenchido por this.id

    this.user.id = this.idUser // pegando o id do user que está logado
    this.postagem.usuario = this.user // peguei o usuário certo em cima e passo para a postagem

    this.pService.postPostagem(this.postagem).subscribe({
      next:
      (resp: Postagem)=>{
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')// PARA IMPLEMENTAR O ALERTA É SÓ ADICIONAR ESTA LINHA
      this.postagem = new Postagem() //limpa os campos do modal
      this.getAllPostagens() // após publicar a postagem ,já aparecer todas postagens atualizadas
    },
    error: (error) => {
      if (error.status == 500) {
        this.alertas.showAlertDanger('Postagem precisa de um tema');

      }
  }})

  }

  quemsomos() {
    this.router.navigate(['/quem-somos'])
}

}