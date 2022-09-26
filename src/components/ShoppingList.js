import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  

  //filter search by name
  const filterBySearch = items.filter(item=>{
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = filterBySearch.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function searchItem(item){
    setSearch(item)
  }

  function handleFormSubmit(data){
    const newItem= [...items, data]

    setItem(newItem)
  }
 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={searchItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} search={search} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
