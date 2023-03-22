import { useState } from "react";
import BlogList from "./BlogList";

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
                 {/* Props */}
            <BlogList blogs={blogs} title = {"Nomadev Blogs"}/>
            </div>
     );
}
 
export default Home;