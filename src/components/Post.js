export default function Post ({item,functionPost}) {
return (
    <div>
        {item.id} {item.title}
        <button onClick={() => {
            functionPost(item)
        }}>detalis</button>

    </div>
);
}
