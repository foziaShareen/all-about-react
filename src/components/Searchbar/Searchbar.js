import './searchbar.css'
import {useState}from 'react'
export default function Searchbar(props){
    // const[term,setTerm]=useState("")
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
     eve.preventDefault()
    console.log("submitted")
    props.addTerm(eve.target['keyword'].value)
    }
    return(
        <section className="searchbar">
            <form onSubmit={submitted} onFocus={focused}>
            <input name="keyword"type="text" placeholder="key" className="searchinput" onChange={changed}/>,
        <button type="submit"name="btn" className="searchbtn" onClick={clicked}>Search</button>
            </form>
       {props.term?<p> you search for {props.term}</p>:''}
       
        </section>
    )
}