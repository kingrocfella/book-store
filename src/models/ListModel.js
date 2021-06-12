export const ListModel = arr =>
  arr.map(item => ({ id: item.list_name_encoded, value: item.display_name }));
