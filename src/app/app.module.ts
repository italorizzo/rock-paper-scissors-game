import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PapelComponent } from './components/papel/papel.component';
import { TesouraComponent } from './components/tesoura/tesoura.component';
import { PedraComponent } from './components/pedra/pedra.component';

import { HeaderComponent } from './header/header.component';
import { RulesComponent } from './rules/rules.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { ResultComponent } from './pages/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RulesComponent,
    ChoiceComponent,
    ResultComponent,
    PapelComponent,
    PedraComponent,
    TesouraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
