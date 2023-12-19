const AllContacts = (props) => {
    let student = props.students;
    return (
        <div>
            <h2>{props.title}</h2>
            {
                student.map((e) => {
                return(
                <div>
                    <p>{e.id} {e.dept} {e.name}</p>
                </div>
                );
                })
            }        
            </div>
        )
}

export default AllContacts;