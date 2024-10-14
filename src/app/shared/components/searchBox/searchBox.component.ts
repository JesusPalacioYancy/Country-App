import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'search-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSubcribe?: Subscription

  @Input()
  public placeholder: string = "";

  @Input()
  public inicialValue: string = "";

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter


  ngOnInit(): void {
    this.debouncerSubcribe = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(
      value => this.onDebounce.emit(value)
    )
  } 

  onKeyPess(searchTerm : string){
    this.debouncer.next(searchTerm)
  }

  ngOnDestroy(): void {
    this.debouncerSubcribe?.unsubscribe()
  };

}
