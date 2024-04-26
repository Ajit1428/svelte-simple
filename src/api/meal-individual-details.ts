import axios from 'axios';

export async function individualMealDeatails(id: string) {
	return await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}
