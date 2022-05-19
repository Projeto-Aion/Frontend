import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil-corporativo',
  templateUrl: './perfil-corporativo.component.html',
  styleUrls: ['./perfil-corporativo.component.css']
})
export class PerfilCorporativoComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(){
    if(environment.token == '') {
          //SE EU DER UM ATUALIZAR TEM QUE VOLTAR PRO LOGIN
      this.router.navigate(['/login'])
    }
  }

}
