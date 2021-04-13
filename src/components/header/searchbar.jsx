import {FaSearch} from 'react-icons/fa';
import "./searchbar.css"


const SearchBar = ()=>{
return(
  <div className="scon">
    <FaSearch className="iconHeader"></FaSearch>
    <input type="text" placeholder= "Search..." className = "search"/>
  </div>
)
}


export default SearchBar;
