import React from "react";
import { CategotyInfo } from "./CategoryInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {CategotyInfo?.map((Info, i) => {
        return <CategoryCard key={i} data={Info} />;
      })}
    </section>
  );
}

export default Category;
