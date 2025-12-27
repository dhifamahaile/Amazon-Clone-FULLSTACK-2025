import React from "react";
import { Link } from "react-router-dom";
import classes from "./category.module.css";
function CategoryCard({ data }) {
  console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.category}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt={data.category} />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
