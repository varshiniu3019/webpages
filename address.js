import React,{usestate} from 'react';
function Address(){
    const [text,setText]=usestate("enter the address here");
    const handlechange=(e)=>setText(e.target.value);
return(
    <>
    <form>
        <label>Present address</label>
        <textarea type="text" value={text} onChange={handlechange}/><br/>
        <label>Permanent  address</label>
        <textarea type="text" value={text} onChange={handlechange}/><br/>

    </form>
    </>
);
}
export default Address;
