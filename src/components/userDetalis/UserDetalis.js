export default function UserDetalis ({item}) {
return (
    <div>
        <h2>{item.id}</h2>
        <div>{item.name}</div>
        <div>{item.username}</div>
        <div>{item.email}</div>
        <div>{item.address.city}</div>
    </div>
);
}
