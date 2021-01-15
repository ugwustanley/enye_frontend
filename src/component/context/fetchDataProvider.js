import React,{useState , useEffect , createContext} from 'react'

export const FetchDataContext = createContext()

export function FetchDataProvider(props) {
    const [recordData, setRecordData] = useState([])
    const [refetch  , setRefetch] = useState('')
    useEffect(() =>{
        setRefetch('useeffect')
        const url = `https://api.enye.tech/v1/challenge/records`
        fetch(url) 
        .then(response => response.json())
        .then(data => {setRecordData(data.records.profiles)})
    } , [refetch])
 
    return (
       <FetchDataContext.Provider value={[recordData , setRecordData , setRefetch]}>
           {props.children}
       </FetchDataContext.Provider>
    )
}


