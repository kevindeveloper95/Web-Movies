 

const API = 'https://api.themoviedb.org/3'


export function Get(path){
      return  fetch(API + path,{
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmMyMzNkN2U5MGZkZGFiOTExNWQwNDI2ZDE5NDM0OCIsInN1YiI6IjYxODA3ZTEzNTI5NGU3MWYwNjE3ZjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42_ldESLQ4FZi-5BSO7F7c_YHHF7rtn-EIs9WWrKmmE",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
    .then((result) => result.json())
}

    