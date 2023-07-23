import axios from "axios"

export default function changeMovies(){

    return(dispatch)=>{

        axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=a19800cf54f1b7895147d247004b3927",
          {
            params: { page: 1 },
          }
        )
        .then((res) => {
            dispatch({type: "SET_movies",payload:res.data.movies})
        })
        .catch((err) => {
          console.log(err);
        });

    }
}