import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
<<<<<<< HEAD
import { PerfilCorporativoComponent } from './perfil-corporativo/perfil-corporativo.component';
=======
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
>>>>>>> 6da73f4a0effe1405212b6c452997af2e46655fd


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    MenuComponent,
    RodapeComponent,
    QuemSomosComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
<<<<<<< HEAD
    PerfilCorporativoComponent,
=======
    PostagemEditComponent,
    PostagemDeleteComponent,
>>>>>>> 6da73f4a0effe1405212b6c452997af2e46655fd
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
