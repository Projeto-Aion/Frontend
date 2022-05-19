import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { UserEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PerfilPadraoComponent } from './perfil-padrao/perfil-padrao.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'inicio', component: InicioComponent},
  {path:'rodape', component: RodapeComponent},
  {path:'quem-somos', component: QuemSomosComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'usuario-edit/:id', component: UserEditComponent},

  {path:'tema', component: TemaComponent},
  {path:'inicio', component: InicioComponent},
  {path:'temaEdit/:id', component: TemaEditComponent},
  {path:'temaDelete/:id', component: TemaDeleteComponent},
  {path:'postagemDelete/:id', component: PostagemDeleteComponent},
  {path:'postagemEdit/:id', component: PostagemEditComponent},
  {path:'perfil-padrao/:id', component: PerfilPadraoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
