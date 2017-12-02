import React from 'react';


const Comp = ({arr,x}) => {
    return (
            <div id="not-found">
            { arr.map((elem,idx)=>{

                return (<div key={idx} style={x}></div>)
                })}
          </div>
    );

}

export default Comp;