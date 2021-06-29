import React,{useState} from 'react';

export default function MyUserRegistration(){

    const [user,setUser] = useState({
        fnme:'',
        lnme:''
    });

    const [submiting,setSubmiting] = useState(false);

    const handleOnChange = (event) => {
        const {name,value} = event.target;
        //  if (name === 'fname'){
        //      setUser({
        //          fnme:value,
        //          lnme:user.lnme
        //      });
        //  } else {
        //      setUser({
        //          lnme:value,
        //          fnme:user.fnme
        //      });
        //  }
        setUser((prevstate) => {
            return {
                ...prevstate,
                [name]:value
            }
        })     
        return (
        <div>
           <form>
                <h2>My Entered Values {user.fnme} - {user.lnme}</h2>
                <div>
                    <label>First Name</label>
                    <input type="text" name="fnme" value={user.fnme} id="fname" onChange={handleOnChange}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lnme" value={user.lnme} id="lname"onChange={handleOnChange}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form> 
        </div>
        )
    }
}