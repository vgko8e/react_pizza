const Categories = ({ value, onClickCategory }) => {
  const categories = [
    "All",
    "Cheese",
    "Meat",
    "Grill",
    "Spicy",
    "Vegetarians",
    "Mix",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
