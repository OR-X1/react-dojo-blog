import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'my new website', body: 'lorem ipsum ...', author: 'othmane', id: 1},
        { title: 'my new logo', body: 'lorem ipsum ...', author: 'yassin', id: 2},
        { title: 'my new course', body: 'lorem ipsum ...', author: 'zouhair', id: 3}
    ])
    const [name, setName] = useState('othmane');

    const handleDelete = (id) => {
        const  newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('hi');
        console.log(blogs);
    }, [name]);
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "othmane")} title="othman's blogs"/> */}
            <button onClick={() => setName('yassin') }>change</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;