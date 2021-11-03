import MoviesGrid from "../Components/MoviesGrid/MoviesGrid"
import Search from "../Components/Search/Search"
import { useDebounce } from "../Debounce";
import { useQuery } from "../Hooks";

export const LandingPages = () =>{

   const query = useQuery();
   const search = query.get("search");

   const debounced = useDebounce(search, 500)
 return (  
 
 <div>
    <Search/>
    <MoviesGrid key={debounced} search={debounced} /> 
 </div>

    );
}