import axios from 'axios';

export async function recipeMealCategorySearch(name: string) {
	return await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${name}`);
}
