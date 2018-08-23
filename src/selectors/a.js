import { createSelector } from 'reselect'

const shoppingItemsSelector = state => state.lists.list



const getTotalValueSelector = (items) => {
  return items.reduce((acc,val) => {
    acc += val.id;
    return acc;
  },0)
}


export const totalSelector = createSelector(
  shoppingItemsSelector,
  getTotalValueSelector
)
