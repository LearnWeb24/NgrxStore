import {Action, createReducer, on } from '@ngrx/store';
import { ShoppingItem } from '../model/shoppin-item.model';
import { addItem, deleteItem } from '../actions/shopping.action';


export const initialState: Array<ShoppingItem> = [{
 id : '111',
 name: 'Coca-Cola'
},
{
  id : '112',
  name: 'Fanta'
 }];

const shoppingReducer = createReducer(
  initialState,
  on(addItem, (state, {id, name}) => ( [...state, {id, name}])),
  on(deleteItem, (state, {id}) => state.filter(val => val.id !== id)),

);


export function reducer(state: Array<ShoppingItem> | undefined, action: Action) {
  return shoppingReducer(state, action);
}
