import React from "react";

export const BlogList = (props) => {
  return (
    <div>
      <h1>BLOG LISt</h1>
      <ul>
        {props.blogs.map((blog) => {
          return (
            <div>
              <li>ID {blog.id}</li>
              <li>TITLE {blog.title}</li>
              <li>DESCRIPTION {blog.description}</li>
              <li>DATE {blog.date}</li>
              <li>TIME {blog.time}</li>
              <br></br>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
