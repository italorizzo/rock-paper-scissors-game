import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from './pages/choice/choice.component';
import { ResultComponent } from './pages/result/result.component';

const routes: Routes = [
  {path: '',  component: ChoiceComponent},
  {path: 'result/:id', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
