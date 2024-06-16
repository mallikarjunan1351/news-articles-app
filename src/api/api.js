import axios from 'axios';
// Values are set in .env file
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

// Fetch articles from the API
export const fetchArticles = async ({period}) => {
  try {
    const response = await axios.get(`${API_URL}svc/mostpopular/v2/viewed/${period}.json?api-key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles", error);
    return [];
  }
};
