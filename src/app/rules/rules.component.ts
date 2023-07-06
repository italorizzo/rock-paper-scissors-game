import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  @Output() ruleBtnClose = new EventEmitter();

  closeCard(): void{
    this.ruleBtnClose.emit(false)
  }
}
