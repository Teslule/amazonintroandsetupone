import React from 'react'
import { categoryInfos } from "./categoryFullInfos";
import CategoryCard from './CategoryCard';
import classes from './category.module.css'

// function Category() {
//   return (
//     <section className={classes.category__container}>
//     {categoryInfos.map((infos)=>{
//         <CategoryCard data = {infos} />
//      })
//     }
//     </section>
      
//   )
// };

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.id} data={infos} />
      ))}
    </section>
  );
}

export default Category;
