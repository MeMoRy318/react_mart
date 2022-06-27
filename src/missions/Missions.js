import {useState,useEffect} from "react"

import Mission from "../mission/Mission"

export default function Missions () {

    const [missions,setMisions] = useState([])
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => setMisions(value.filter(value => value.launch_year !== "2020")))
    },[])

return (
    <div>
        {missions.map((value,index) => <Mission key={index} item={value}/>)}
    </div>
);
}
