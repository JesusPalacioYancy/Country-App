
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent { 

  @Input()
  public placeholder: string = "";

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter

  emitValue(value: string){
    this.onValue.emit(value)
  };


}
