import { useState } from "react";

const Create = () => {
    const [title, SetTitle] = useState ('hello');
    const [body, SetBody] = useState ('hello');
    const [author, SetAuthor] = useState ('hello');

    return ( 
        <div className="create">
            <h2>Create a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                type="text"
                 required 
                 value={title}
                 onChange = {(e) => SetTitle(e.target.value)}
                 />
                <label>Blog body:</label>
                <textarea required
                value={body}
                onChange = {(e) => SetBody(e.target.value)}
                ></textarea>
                
                <label>Blog author:</label>
                <select
                value={author}
                onChange = {(e) => SetAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>


                </form>
        </div>
     );
}
 
export default Create;