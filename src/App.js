import './App.css'
import Header from './components/Header/Header'
import Searchbar from './components/Searchbar/Searchbar'

const App=()=>{
  // let appName = "App"
   let heading = "company name"
  function handleClick(eve){
    console.log(eve.target)
  }
  return(
    <>
<div onClick={handleClick}>
<Header name={heading} />
<Searchbar/>

</div >


<div>welcome to our site</div>
    </>
  )
}
export default App