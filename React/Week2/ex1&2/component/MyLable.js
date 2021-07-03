import React from 'react';
import './Name.css';
class MyUser extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    username =(event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit= (event) => {
        alert(`${this.state.username} Registered Successfully`)
        console.log(this.state);
        this.setState({
            username: ""
            });
        event.preventDeafult()
        }

    render() {
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <h1> Registration</h1>
                    <label>UserName: </label> 
                    <input type ="text" value={this.state.username} onChange ={this.username} />
                    <br></br>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div> 
    
        )
    }
}
export default MyUser