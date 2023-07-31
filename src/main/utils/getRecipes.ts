import RecipeApi from './RecipeApi'

export async function getRecipes () {
    const resposne = await RecipeApi.get('/recipes');
    const result = await resposne.data;
    return result;
}