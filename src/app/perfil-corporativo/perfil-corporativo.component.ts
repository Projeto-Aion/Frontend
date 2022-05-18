import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-perfil-corporativo',
  templateUrl: './perfil-corporativo.component.html',
  styleUrls: ['./perfil-corporativo.component.css']
})
export class PerfilCorporativoComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  usuario = environment.usuario
  telefone = environment.telefone
  tipo = environment.tipo

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.token == '') {          //SE EU DER UM ATUALIZAR TEM QUE VOLTAR PRO LOGIN
      this.router.navigate(['/login'])
    }
  }

}
