import {useState,useEffect} from "react"

import User from "../user/User"

export default function Users () {
const [users,setUsers] = useState([])
    const [user,setUser] = useState({})

    useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])
return (
    <div>

        {
            users.map((value,index) => <User key={index} item={value}/>)
        }
    </div>
);
}

