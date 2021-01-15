import React,{useState , useContext , useEffect, Component} from 'react'
import {FetchDataContext} from '../context/fetchDataProvider'
import './Filter.css'

const Filter = () => {

    const [recordData , setRecordData , setRefetch] = useContext(FetchDataContext)
    const [dataexist , setDataexist]  = useState('')
    const [methodexist , setMethodexist] = useState('')
    const [all , setAll] = useState([])

    useEffect(() => {
       if(all.length > 1){
           setAll(all)
       }else{
           setAll(recordData)
       }
    }, [recordData])
   
    const   HandleGender = (e) =>{
     // setRefetch('this is from select')
      let selected = e.target.value
      console.log(all)
      if(selected === 'default'){
        setRefetch('this is from select') 
      }
      if(dataexist === 'yes' && selected !== 'default'){
 
        const filtered = all.filter( oneRecord => oneRecord.Gender === selected)
        setRecordData(filtered)
      }
      else{
        const filtered = recordData.filter( oneRecord => oneRecord.Gender === selected)
        setRecordData(filtered)
        setDataexist('yes')
      }    
    }


    const   HandlePaymethod = (e) =>{
        // setRefetch('this is from select')
         let selected = e.target.value
   
         if(selected === 'default'){
           setRefetch('this is from select') 
         }
         if(methodexist === 'yes' && selected !== 'default'){
 
            const filtered = all.filter( oneRecord => oneRecord.PaymentMethod === selected)
            setRecordData(filtered)
          }
         else{
           const filtered = recordData.filter( oneRecord => oneRecord.PaymentMethod === selected)
           console.log(filtered , selected)
           setRecordData(filtered)
           setMethodexist('yes')
         }
         
        }

    return (
        <div className="filter">

           <select className="gender__select" onChange={HandleGender}>
               <option Value = "default">Gender (all)</option>
               <option value = 'Male'>Male</option>
               <option value='Female'>Female</option>
               <option value = 'Prefer to skip'>Prefer to skip</option>
           </select>

           <select className="paymethod__select" onChange={HandlePaymethod}>
               <option Value = "default">Payment Method (all)</option>
               <option value = 'paypal'>Paypal</option>
               <option value='cc'>cc</option>
               <option value='check'>check</option>
               <option value='money order'>money order</option>
           </select>

        </div>
    )
}

export default Filter
