import axios from 'axios';

export async function recipeSearchByName(query: string) {
	return await axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`);
}
