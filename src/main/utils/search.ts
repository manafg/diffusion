import { Recipe } from "../context/RecipeContext/types";

function sortByKey(array: Recipe[], key: string) {
  return array.sort((a: Recipe, b: Recipe) => {
    // @ts-ignore
    const x = a[key];
    // @ts-ignore
    const y = b[key];

    return x < y ? -1 : x > y ? 1 : 0;
  });
}

function searchByText(array: Recipe[], text: string) {
  return array.filter(obj => obj?.name.includes(text));
}

export { sortByKey ,  searchByText }