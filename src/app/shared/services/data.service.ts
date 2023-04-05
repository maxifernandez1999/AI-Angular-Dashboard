import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  miEvento = new EventEmitter<any>();

  emitirEvento() {
    this.miEvento.emit();
  }
}
