import './searchbar.css'
import {useState}from 'react'
export default function Searchbar(){
    const[myprop,setmyProp]=useState("default value")
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
        setmyProp("hello")
        eve.preventDefault()
        console.log("submitted")
    }
    return(
        <section className="searchbar">
            <form onSubmit={submitted} onFocus={focused}>
            <input name="input"type="text" placeholder="key" className="searchinput" onChange={changed}/>,
        <button type="submit"name="btn" className="searchbtn" onClick={clicked}>Search</button>
            </form>
       <p>{myprop}</p>
        </section>
    )
}