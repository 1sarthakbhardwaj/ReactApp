import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
        },

        {
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
        },

        {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
        }
    ]);
    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.likes}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <a href={blog  .url}>View</a>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Home;