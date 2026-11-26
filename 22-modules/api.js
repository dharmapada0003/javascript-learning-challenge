//Modules with DummyJSON API

export async function fetchRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");

    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}
