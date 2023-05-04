import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog ps-2 '>
            <h2 className='text-center'>Questions Answer</h2>
            <h2 className='mt-4'>1. Tell us the differences between uncontrolled and controlled components.</h2>
            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</p>
            <h2>2. How to validate React props using PropTypes</h2>
            <p>App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</p>
            <h2>3. Tell us the difference between nodejs and express js.</h2>
            <p>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            <h2>4. What is a custom hook, and why will you create a custom hook?</h2>
            <p>Custom hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
        </div>
    );
};

export default Blog;