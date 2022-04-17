import React from "react";

const Blogs = () => {
    return ( <
        div className = "text-left p-20" >
        <
        h1 className = "font-bold" > Question Answers < /h1> <
        br / >
        <
        h1 className = "font-bold" > What is Context API ? < /h1> <
        p >
        Context API allows us to pass data through our components which gives our components the ability to share data at different levels. <
        /p> <
        br / >
        <
        h1 className = "font-bold" > What is semantic tags ? < /h1> <
        p >
        Semantic tags describes the purpose of the HTML tags and what it should contain.For example, < span className = "font-bold" > header < /span> , <
        span className = "font-bold" > footer < /span> ,{" "} <
        span className = "font-bold" > article < /span> are semantic tags and they
        describe the purpose and the type of content they should contain. <
        /p> <
        /div>
    );
};

export default Blogs;