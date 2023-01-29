import axios from 'axios'

export const searchMovies = async (e) => {
    const search = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${e}&page=1&api_key=${process.env.REACT_APP_APIKEY}`);
    return search.data
};