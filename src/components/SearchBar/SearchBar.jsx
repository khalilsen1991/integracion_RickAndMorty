import './Searchbar.css'

export const SearchBar = (props) => {
  return (
  <div class="searchBox">
    <input class="searchInput"type="text" name="" placeholder="Search"/>
    <button class="searchButton" href="#">
        <i class="material-icons">
            search
        </i>
    </button>
  </div>
  )
}