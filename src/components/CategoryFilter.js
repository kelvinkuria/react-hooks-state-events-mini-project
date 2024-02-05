import React, { useState } from "react";

function CategoryFilter({ categories, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => handleCategorySelect("All")}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

