import { Component, EventEmitter, Output } from '@angular/core';
import { auditTime, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shopping-search',
  standalone: false,
  templateUrl: './shopping-search.html',
  styleUrl: './shopping-search.scss'
})
export class ShoppingSearch {

  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(debounceTime(400));
  // @Output() onSearch = this.onInput.pipe(auditTime(400));

  inputSearch(text:string){
    this.onInput.emit(text);
  }

}
