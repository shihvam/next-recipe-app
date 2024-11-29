import RecipeDetailsItem from "@/components/recipe-detals";

async function fetchRecipeDetails(currentRecipeId) {
  try{

    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
    const data = await apiResponse.json();
    
    return data;

  } catch(e) {
    throw new Error(e)
  }
}


export default async function RecipeListDetails({params}) {


  const getRecipeDetails = await fetchRecipeDetails(params?.details)

  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
}