import SearchIcon from '@mui/icons-material/Search';
import "./searchStyles.css"

export const Search = () => {
    return (
        <div>
            <div className='search-div'>
            <SearchIcon />
            <input className='search' type="text" placeholder='Search ...'/>
            </div>
        </div>
        
    )
}