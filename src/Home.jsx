import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs); 
    }

    // this functions fires on every render
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response => {
            return response.json();
        })
       .then(data => {
         setBlogs(data)
       }); 
}, []);

    return ( 
        <div className="home"> 
                 {/* Props */}
           {blogs && <BlogList blogs={blogs} title = {"Nomadev Blogs"} handleDelete = {handleDelete}/> }
            </div>
     );
}
 
export default Home;