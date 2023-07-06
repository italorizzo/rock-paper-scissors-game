import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pedrapapeltesoura';
  rule: boolean

  constructor(){
    this.rule = false
  }

}
