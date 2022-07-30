import React from 'react'

export const SloteM = (props) => {
    const {x,y,z} =props;
    
    if(x===y && (x===z)){
        return (
            <div>
             <h3>{x}{y}{z}</h3>
                <h3>This is Matching</h3>
            </div>
        )
    }
    else {
        return (
            <div>
             <h3>{x}{y}{z}</h3>
                <h3>This is Not Matching</h3>
            </div>
        )
    }

}
