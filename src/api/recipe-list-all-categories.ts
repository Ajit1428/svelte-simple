import axios from 'axios';

export async function allRecipeListByCategory() {
	return axios.get('https://themealdb.com/api/json/v1/1/categories.php');
}
