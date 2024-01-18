import './searchbar.css'
import {useState}from 'react'
export default function Searchbar(){
    const[term,setTerm]=useState("")
    function clicked(eve){
        console.log("clicked")
    }
    function focused(eve){
        console.log('focused')
    }
    function changed(eve){
        console.log('changed',eve.target.value)
    }
    function submitted(eve){
    
        setTerm(eve.target['keyword'].value)
        eve.preventDefault()
        console.log("submitted")
    }
    return(
        <section className="searchbar">
            <form onSubmit={submitted} onFocus={focused}>
            <input name="keyword"type="text" placeholder="key" className="searchinput" onChange={changed}/>,
        <button type="submit"name="btn" className="searchbtn" onClick={clicked}>Search</button>
            </form>
       {term?<p> you search for {term}</p>:''}
        </section>
    )
}