import './App.css'
import Header from './components/Header/Header'
import Searchbar from './components/Searchbar/Searchbar'
import SearchHistory from '../src/components/SearchHistory/SearchHistory'
import { useState } from 'react'

const App=()=>{
  // let appName = "App"
 
  const[terms,setTerms]=useState(['new'])
  function AddTerm(term){
    setTerms([term,...terms])
  }
   let heading = "company name"
  function handleClick(eve){
    console.log(eve.target)
  }
  return(
    <>
<div onClick={handleClick}>
<Header name={heading} />
<Searchbar term={terms[0]}addTerm={AddTerm}/>
<SearchHistory terms={terms}/>

</div >


<div>welcome to our site</div>
    </>
  )
}
export default App