export default function User ({item:{id,name}}) {
return (
    <div>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <button>Click</button>
    </div>
);
}
