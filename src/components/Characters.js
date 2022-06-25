function Characters({id,name,status,species,gender,image}) {
    return (
        <div>
<h2>{id}</h2>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <img src={image}/>
        </div>
    );
}
export default Characters;