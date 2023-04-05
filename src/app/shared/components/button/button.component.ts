import { Component, Input } from '@angular/core';

@Component({
  selector: 'mf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input("drawer") drawer:any;
  public buttonText = 'Botón Rojo';
  toggle(){
    this.drawer.toggle()
  }
  public changeText() {
    if (this.buttonText === 'Botón Rojo') {
      this.buttonText = '¡Haz clic!';
      console.log("xd")
    } else {
      this.buttonText = 'Botón Rojo';
    }
  }

}
