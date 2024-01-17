import './App.css'
import Header from './components/Header/Header'

const App=()=>{
  let appName = "App"
  let heading = "company name"
  
  return(
    <>
<div className={appName}>
  <h1 style={{color:'red'}}>hello world</h1>
 

</div>
<Header name={heading} title="some hard coded"/>
<div>welcome to our site</div>
    </>
  )
}
export default App