import React from 'react';


const CreateShift = ({handleChange,handleSubmit}) => {

  return (
        <div style={shiftCard}>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="summary" placeholder="summary" style={input}></input>
            <input onChange={handleChange} type="text" name="location" placeholder="location" style={input}></input>
            <input onChange={handleChange} type="text" name="description" placeholder="description" style={input}></input>
            <input onChange={handleChange} type="text" name="startTime" placeholder="startTime" style={input}></input>
            <input onChange={handleChange} type="text" name="endTime" placeholder="endTime" style={input}></input>
            <input className="submit" type="submit" value="Post New Shift"></input>
          </form>
        </div>
    )//end of return
};

export default CreateShift;


const organizer = {
  backgroundColor: "lightgrey",
  fontSize: "30px",
  flexShrink: "1"
}

const input = {
  marginTop: "5px",
  width: "370px",
  fontSize: "20px",
  textAlign: "center"
}


const shiftCard = {
    marginTop: "10px",
    width: "400px",
    height:"200px",
    display: "flex-wrap",
    justifyContent:"center",
    textAlign:"center"
}













