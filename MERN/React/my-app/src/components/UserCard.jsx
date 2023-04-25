const UserCard=(props)=>{
    return (
        <>
            <h1>{props.lastName},{props.firstName}</h1>
            <p>Age : {props.age}</p>
            <p>Haircolor : {props.haircolor}</p>
        </>
    )
}

export default UserCard