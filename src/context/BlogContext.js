import React, { useState } from "react"

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
    
    const [blogPosts, setBlogPosts] = useState([]) // default value is empty array

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `blog post #${blogPosts.length + 1}` }])
    }
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext