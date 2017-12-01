import React from 'react';


const Box = ({state,beginAction,value}) => {
    const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
            <div  style={state} 
                  onClick={()=>beginAction()}
                  value={value}
                  className="box">

            
                  






                  </div>
    );

}

export default Box;