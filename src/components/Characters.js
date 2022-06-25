import "./Characters.css"
function Characters({name,surname,body,img}) {
   return (
       <div>
          <h2>{name}</h2>
          <h2>{surname}</h2>
          <div>{body}</div>
          <img className={"target"} src={img} alt={"&&&&&&&&&"}/>
       </div>
   )
}
export default Characters;