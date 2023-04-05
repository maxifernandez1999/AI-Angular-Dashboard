import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mf-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() counterChanged = new EventEmitter<number>();
  constructor() { }
  public toggleSidebar() {
    this.counterChanged.emit();
  }

}
