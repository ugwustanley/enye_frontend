import React ,{useState , useContext} from 'react'
import {FetchDataContext} from '../context/fetchDataProvider'
import Bar from './img/format_list_bulleted-24px.svg'
import SearchIcon from './img/search-24px.svg'
import './Search.scss'

const Search = () => {
    const [recordData , setRecordData , setRefetch] = useContext(FetchDataContext)
    const [searchValue , setSearchValue] = useState('')

    const HandleSearch = () =>{
        if(searchValue === ''){
            setRefetch("from search component")
        }
       console.log(searchValue)
       const newSet =  recordData.find( user => user.UserName === searchValue ) 
       console.log(newSet) 
       setRecordData(newSet) 
       setSearchValue('')
     //  newSet.map(data => console.log(data.Email))
    }

    return (
        <div className="search">
            <img src={Bar} className="menu__bar" alt="menu bar"></img>
            <input type="text" className="search__box"  onKeyPress={(e) =>{ if(e.key === 'Enter'){HandleSearch()}}} placeholder="Search username" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
            <img src = {SearchIcon} alt = "search bar" onClick={HandleSearch} className="search__icon"></img>
            
        </div>
    )
}

export default Search
