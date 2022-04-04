import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className="blog-container">
                <div className="">
                   <h1 className='question'>What is Context api?</h1>
                   <p className='ans'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className="">
                  <h1 className='question'>What are semantic elements?</h1>
                  <p className='ans'>Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.</p>
                </div>
                <div className="">
                    <h1 className='question'>What is an inline-block element?</h1>
                    <p className='ans'>Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You'll have to declare display: inline-block in your CSS code. One common use for using inline-block is for creating navigation links horizontally, as shown below.</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;