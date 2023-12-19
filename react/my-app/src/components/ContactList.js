import React from "react";

class Func extends React.Component{ 
    state = {"id" : 1, "name" : "Shashank"}
    
    title = "All Contacts";

    render(){
    return (
        <div>
            <p>{this.state.name}</p>
        </div>
    )
    }
}
    
export default Func;