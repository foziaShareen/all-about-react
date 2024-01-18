what if we want to use this update value from setState function in our application on the page where we have the state
const[term,setTerm]=useState("")
note here we have empty string and in javascript empty string are falsy value , so for capture the value from term variable we have to check wether it is empty or some value is written in search box
{term}?<p>you search for {term}:""