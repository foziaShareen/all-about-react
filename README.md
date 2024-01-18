hooks
we havd this.state in case of classes so when 
when we change valus , means when state changes it can
capture by this.state but in functions we have not 
this.state , in functions we have hooks for that 
purpose.
const [count , setCount]= usteState(0);
rather than zero this argument could b anything 
array ,variable, object or may be default value
const [count , setCount]= usteState("something");
here count is the value and setCount is the function to update this value , it means useState gives us 
two things value and function.
in this code we use myprop and then on submit the form update the state by setmyProp("hello")
note📝also inspect it by react dev components tool, in searchbar we have state there.