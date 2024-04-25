import axios from 'axios';

export async function listAllRecipe() {
	return await axios.get('https://themealdb.com/api/json/v1/1/categories.php/');
}
