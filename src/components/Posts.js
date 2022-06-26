import {useEffect,useState} from "react"
import Post from "./Post"
export default function Posts () {
    let [posts,setPosts] = useState([])
    let [post,setPost] = useState({})
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value =>setPosts(value))
    },[])
    const functionPost = (item) => {
        setPost(item)
    }
return (
    <div>
        {post.id && <div>{post.id} {post.title} </div>}

        <h2>Posts component</h2>
        {posts.map((post,index) => <Post key={index} item={post} functionPost={functionPost}/>)}


    </div>
);
}
