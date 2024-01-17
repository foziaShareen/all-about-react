import './header.css'
import Nav from '../Nav/Nav'
const Header=(props)=>{
    
    return(
        <header className="mastheader">
            
            <h1>{props.name}</h1>
            <Nav tittle={props.title}/>
        </header>
    )
}
export default Header