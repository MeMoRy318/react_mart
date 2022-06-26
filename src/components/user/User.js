export default function User ({item:{id,name}},fn) {
return (
    <div>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <button onClick={() => fn()}>Click</button>
    </div>
);
}
