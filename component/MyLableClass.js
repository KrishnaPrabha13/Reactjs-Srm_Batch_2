import React, {Component} from 'react'
import { retrieveSourceMap } from 'source-map-support'

const MyLableClass = class extends Component{
    render() {
        return(
            <div>
                <h2> I am from child component</h2>

            </div>
         
        )
    }
}
export default MyLableClass;