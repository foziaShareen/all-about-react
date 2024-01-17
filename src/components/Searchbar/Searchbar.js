import './searchbar.css'
export default function Searchbar(){
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
    }
    return(
        <section className="searchbar">
            <form onSubmit={submitted} onFocus={focused}>
            <input name="input"type="text" placeholder="key" className="searchinput" onChange={changed}/>,
        <button type="submit"name="btn" className="searchbtn" onClick={clicked}>Search</button>
            </form>
       
        </section>
    )
}