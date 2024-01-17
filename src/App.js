import './App.css'
import Header from './components/Header/Header'

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

</div >


<div>welcome to our site</div>
    </>
  )
}
export default App