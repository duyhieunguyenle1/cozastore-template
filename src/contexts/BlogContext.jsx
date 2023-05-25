import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const BlogContext = createContext()

const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await axios.get("https://my-json-server.typicode.com/duyhieunguyenle1/fake-data-json/posts")
            setBlogs(response.data)
        }
        fetchBlog()
    }, [])

    return (
        <BlogContext.Provider value={blogs}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider