export default function Mission ({item:{mission_name,launch_year,links:{mission_patch_small}}}) {
return (
    <div>
        <h2>{mission_name}</h2>
        <div>{launch_year}</div>
        <img src={mission_patch_small} alt={mission_name}/>
    </div>
);
}
