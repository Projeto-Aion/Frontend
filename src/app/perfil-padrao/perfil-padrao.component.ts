import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-perfil-padrao',
  templateUrl: './perfil-padrao.component.html',
  styleUrls: ['./perfil-padrao.component.css']
})
export class PerfilPadraoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.token == '') {          //SE EU DER UM ATUALIZAR TEM QUE VOLTAR PRO LOGIN
      this.router.navigate(['/login'])
    }
  }

}
