import React from "react";
import classes from "./News.module.css";



const News = (props) => {
    return (
        <div className={classes.content}>
           {props.newsPage.newsPageText}
        </div>
    );
    
};
   






export default News;