import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app/store/model/appState.model';
import { ShoppingItem } from './store/model/shoppin-item.model';
import { addItem, deleteItem } from './store/actions/shopping.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // shoppingItems$: Observable<Array<ShoppingItem>>;
  shoppingItems$: Observable<ShoppingItem[]>;
  newItem = { id: '', name: ''};
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.shoppingItems$ = this.store.select( store => store.shopping);
  }

  addItems() {
    console.log(this.newItem);
    this.store.dispatch(addItem(this.newItem));
    this.newItem = { id: '', name: ''};
  }

  delItem(id) {
    console.log(id);
    this.store.dispatch(deleteItem({id}));
    console.log(this.shoppingItems$);

  }
}
