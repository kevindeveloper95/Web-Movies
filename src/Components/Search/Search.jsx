import React from 'react'
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from 'react-router';
import { useQuery } from '../../Hooks'






const Search = () => {

const query = useQuery();
const search = query.get("search");



const history = useHistory()



const handlesubmit = (e) =>{
e.preventDefault()



};

    return (
        <div>
            <form className={styles.searchContainer} onSubmit={handlesubmit}>
            <div className={styles.searchBox}>
                <input
                className={styles.searchInput}
                type="text"
                value={search ?? ""}
                autoFocus
                placeholder="Title"
                aria-label="Search Movies"
                onChange={(e) => { 
                const value = e.target.value    
                history.push('/?search=' + value)
            }}
                

                />
                <button className={styles.searchButton} type="submit" >
                <FaSearch size={20} />
                </button>
            </div>
            </form>
        </div>
    )
}

export default Search
