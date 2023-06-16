import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="June 20th, 2023" text="Static Page using ReactJS"/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog05} date="June 30th, 2023" text="The Restaurant Project using ReacJS" />
        <Article imgUrl={blog02} date="April 3rd, 2023" text="RESTfull API using PHP, JS, Jquery and Bootstrap" />
        <Article imgUrl={blog03} date="May 20th, 2023" text="Laravel Project with Admin panel Functionality" />
        <Article imgUrl={blog04} date="May 15th, 2023" text="Contract Singer Project built using Vanilla PHP" />
        
      </div>
    </div>
  </div>
);

export default Blog;