type Item = {
  id: string;
};

type MoveItem = <TItem>(array: TItem[], from: number, to: number) => TItem[];

type RemoveItemAtIndex = <TItem>(array: TItem[], index: number) => TItem[];

type InsertItemAtIndex = <TItem>(
  array: TItem[],
  item: TItem,
  index: number
) => TItem[];

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: TItem) => item.id === id);
};

/**
 * A utility function that will help us to move the items inside the array
 * @param array origin array whose item will be moved
 * @param from starting index
 * @param to ending index
 * @returns new array which is been updated by moving its item
 */
export const moveItem: MoveItem = (array, from, to) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
};

export const removeItemAtIndex: RemoveItemAtIndex = (array, index) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertItemAtIndex: InsertItemAtIndex = (array, item, index) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};
