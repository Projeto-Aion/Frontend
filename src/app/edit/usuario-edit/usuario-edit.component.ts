import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: Usuario= new Usuario()
  idUser:number
  confirmaSenha: string
  tipoUsuario:string

  id = environment.id

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == '') {          //SE EU DER UM ATUALIZAR TEM QUE VOLTAR PRO LOGIN
      this.router.navigate(['/login'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any){
    this.confirmaSenha = event.target.value

  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value

  }

  atualizarUser(){
    this.user.tipo =this.tipoUsuario // pegar o tipo de usuário (user.tipo) e colocar dentro da variável tipoUsuário

    if(this.user.senha != this.confirmaSenha){ //Comparação de senhas
      this.alertas.showAlertDanger('As senhas estão incorretas.')
    } else{
      this.user.postagem = []
      this.authService.atualizar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        
        /*this.router.navigate(['/inicio'])*/
        this.alertas.showAlertSuccess('Usuário atualizado com sucesso, faça o login novamente')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/login'])

      })
    }

  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario)=>{
      this.user=resp
      this.user.senha = ''
    })

  }

}

