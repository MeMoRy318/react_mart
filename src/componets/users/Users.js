import {useEffect,useState} from "react"
import User from "../user/User"
import {getFetch} from "../services/User.api.services"
export default function Users () {
    const [users,setUsers] = useState([])

    useEffect(() => {
        getFetch("https://jsonplaceholder.typicode.com/users",setUsers)
    },[])

return (
    <div>

        {

users.map(value => <User key={value.id} item={value}/>)

        }
    </div>
);
}
