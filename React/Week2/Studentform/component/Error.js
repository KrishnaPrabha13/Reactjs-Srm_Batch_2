import React from 'react'

export default function Error({message}) {
    return (
        <div>
            {
                message && <span className= "error">{message}</span>
            }

        </div>
    )
}
