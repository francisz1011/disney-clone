import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3/"
const api_key='805e40f4e582d50f2cdacc50f6ab9ad8'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=805e40f4e582d50f2cdacc50f6ab9ad8';
//api.themoviedb.org/3?api_key=805e40f4e582d50f2cdacc50f6ab9ad8
// https://api.themoviedb.org/3/movie/550?api_key=805e40f4e582d50f2cdacc50f6ab9ad8
//api.themoviedb.org/3/trending/all/day?api_key=805e40f4e582d50f2cdacc50f6ab9ad8
//https://api.themoviedb.org/3/

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)


    export default{
        getTrendingVideos,
        getMovieByGenreId
    }