import SearchResultsItems from "./SearchResultsItems";

export default function SearchResults( {results, isSearching}){
    return (
       <div style={ {width:"100%", padding:"0rem 2rem, 0rem, 2rem"}}>
           {!results?.length && isSearching && <label>NO HAY RESULTADOS</label> }
           {results?.map((value) => 
            <SearchResultsItems key={value.id} {...value}/>
           )}
       </div>
    );
}