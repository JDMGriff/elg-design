export async function getData({ url }) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
      	return data.data || [];

    } catch (error) {
      	console.error('Error fetching data:', error.message);
      	return [];
    }
}