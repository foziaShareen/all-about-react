## how to handle events in react

first of all we should discuss some important things 
we have made a component <Header/>
suppose in this header we pass an variable name and an function like this
let compnay = "somenameof company" 
function handleClick(eve){console.log(eve.arget)}
<header name={company} >
now think how react is taking all this stuff , we know in js wvery thing is treated as object 
so here react took this stuff like below
const Header={
    name:company,
    handleClick(){}
}
it means name is treated as key and company is value  
what about the handleClick whaich has to handle onClick event , but onClick is not part of react itself rather
it is the think related to html so we should pass it to the div in which we have put our header component , there
it wil work🤔🤔
<div onClick={handleClick}>
<Header name={heading} />
