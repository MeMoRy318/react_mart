import {useEffect,useState} from "react"
import User from "../user/User"
import UsersDetalis from "../userDetalis/UserDetalis"


export default function Users () {
    const [users,setUsers] = useState([])

    const [user,setUser] = useState({})

    const userInfo = (item) => setUser(item)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

return (
    <div>
<div>
    {user.id && <UsersDetalis item={user}/>}

    {users.map(value => <User key={value.id} item={value} userInfo={userInfo}/>)}

</div>


    </div>
);
}
