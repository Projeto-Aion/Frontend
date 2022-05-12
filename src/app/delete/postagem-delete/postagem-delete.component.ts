import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';

import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  idPostagem: number
  postagem: Postagem = new Postagem ()

  constructor(

    private pService: PostagemService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

  this.idPostagem = this.route.snapshot.params['id']
  this.findByIdPostagem(this.idPostagem)

  }

  findByIdPostagem(id: number) {
    this.pService.getByIdPostagem(id).subscribe((resp:Postagem)=> {
    this.postagem = resp
    })
  }

  delete(){
    this.pService.deletePostagem(this.idPostagem).subscribe(() => {
      alert('Deletado!')
      this.router.navigate(['/inicio'])
    })
  }

}
