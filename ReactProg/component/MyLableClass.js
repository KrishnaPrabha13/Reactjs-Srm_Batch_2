import React, { Component } from 'react'

const MyLableClass =  class extends Component {

    constructor(){
        super()
    }

    render() {

        let response = "";

        const datas = ["a1","b1","c1"];

        const [a,b,c] = datas;

        return (
            <div>
                <h2>I am from Child Component - {a} - {b} - {c}</h2>        
                {
                    datas.map((x)=>{
                        return (
                            <>
                                <h2>The header is...</h2>
                                <h4>the data is {x}</h4>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default MyLableClass;