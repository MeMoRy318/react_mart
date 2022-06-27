export default function User ({item,userInfo}) {
return (
    <div>
       <h2>{item.id}</h2>
        <div>{item.name}</div>
        <button onClick={() => userInfo(item)}>UserInfo</button>
    </div>
);
}
