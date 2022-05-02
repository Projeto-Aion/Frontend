import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'rodape', component: RodapeComponent},
  {path:'quemsomos', component: QuemSomosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
