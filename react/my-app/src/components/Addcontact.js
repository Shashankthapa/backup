// class component

import React from "react";

class AddContact extends React.Component{
    render(){
        return (
            <section className = "add-student">
            <form>
                <section>
                    <h2>Add Student</h2>
                </section>
                <section>
                <label>First name : </label>
                <input type = "text" placeholder = "First name"></input>
                </section>
                <section>
                <label>Last name : </label>
                <input type = "text" placeholder = "Last name"></input>
                </section>
                <section>
                <label>Email : </label>
                <input type = "text" placeholder = "Last name"></input>
                </section>
                <section>
                <input type = "submit" style = {{width : "30vh"}} value = "SUBMIT"/>
                </section>
            </form>
            </section>
        );
    };
}

export default AddContact;