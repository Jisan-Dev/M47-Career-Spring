import { useEffect, useState } from 'react';
import accountsImg from '../../assets/icons/accounts.png';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex gap-6 ">
      {categories.map((category) => (
        <div key={category.id} className="p-10 grow rounded-lg bg-gradient-to-b from-bannerGradientFrom to to-bannerGradientTo">
          <div className="bg-gradient-to-b from-[#7E90FE1A] to-[#9873FF1A] w-[70px] h-[70px] p-4 rounded-lg mb-8">
            <img src={accountsImg} className="w-full" alt="" />
          </div>
          <h3 className="text-zinc-700 text-xl font-extrabold"> {category.category_name} </h3>
          <p className="text-neutral-400 text-base font-medium">{category.availability}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
