import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css"
import data from "../../data/users.json"
import SearchResults from "./components/SearchResults";

export default function Search(){
    const [isAtTop, setIsAtTop] = useState(false);    
    const [results, setResults] = useState([])

    const handleCloseSearch=() => {
        setIsAtTop(false);
        setResults([]);
    };
    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if(data?.length){
            const searchTextMin = searchText.toLowerCase();
            const filterData = data.filter((value) => (
                    value.name.toLowerCase().includes(searchTextMin) || 
                    value.name.toLowerCase().includes(searchTextMin) ||
                    value.email.toLowerCase().includes(searchTextMin) ||
                    value.username.toLowerCase().includes(searchTextMin)
                )
            );
            setResults(filterData)
        }
    };
    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox 
                onSearch={handleSearchClick}
                onClose={handleCloseSearch}
                isSearching = {isAtTop}
            />
            <SearchResults results = {results} isSearching={isAtTop}/>
        </div>
        
    )
}