import React, {useContext, useState} from 'react'
import ReactPaginate from 'react-paginate'
import {FetchDataContext} from '../context/fetchDataProvider'
import Profile from '../profile/Profile'
import './Records.scss'

const Records = () => {
     
    const [recordData] = useContext(FetchDataContext) 
    const [currentPage, setCurrentPage] = useState(0);
// 

function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
}

//console.log(recordData , 1)
 if(!recordData){
     return(
         <p className="not__found" >sorry, no user found</p>
     )
 }

const PER_PAGE = 10;
const offset = currentPage * PER_PAGE;
const currentPageData = recordData.length === undefined ? recordData : recordData.slice(offset, offset + PER_PAGE);
const pageCount = Math.ceil(recordData.length / PER_PAGE);


    return (
        <div className="records">

       {currentPageData.length > 1 ? currentPageData.map(record => <Profile record={record} />) :  <Profile record = {recordData} /> }
         
       <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        marginPagesDisplayed={0}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        />
        
              
        </div>
    )
}

export default Records;