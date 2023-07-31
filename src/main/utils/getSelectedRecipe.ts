import RecipeApi from './RecipeApi'

export async function getSelectedRecipe (id: string) {
    const resposne = await RecipeApi.get(`/recipes/${id}`);
    const result = await resposne.data;
    return result;
}