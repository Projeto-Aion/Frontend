import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem ()
  tema: Tema = new Tema ()
  listTema: Tema []
  idTema: number
  idPostagem: number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pService: PostagemService,
    private tService: TemaService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    if(environment.token == '') {
      // alert('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/login'])
    }
    let id =this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllTema()

  }

  findByIdPostagem(id: number) {
    this.pService.getByIdPostagem(id).subscribe((resp:Postagem)=> {
    this.postagem = resp
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

  atualizar(){
    this.tema.id=this.idTema
    this.postagem.tema=this.tema

    this.pService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.alertas.showAlertSuccess ('Postagem atualizada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}

