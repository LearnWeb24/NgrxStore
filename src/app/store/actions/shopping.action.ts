import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../model/shoppin-item.model';

export const addItem = createAction(
    '[Shopping] AddItem',
      props<{id: string, name: string}>()
);

export const deleteItem = createAction(
  '[Shopping] DeleteItem',
  props<{id: string}>()
);
