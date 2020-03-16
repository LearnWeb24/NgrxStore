import {ShoppingItem} from '../model/shoppin-item.model';

export interface AppState {
  // readonly shopping: Array<ShoppingItem>;
  readonly shopping: ShoppingItem[];
}
