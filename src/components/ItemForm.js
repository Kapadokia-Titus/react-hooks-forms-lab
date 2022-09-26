import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [form, setForm] = useState({
    id:uuid(),
    name:"", 
    category:"Produce"
  })


  function itemFormSubmit(event){
    event.preventDefault(); 

    props.onItemFormSubmit(form)
  };

  function onShoppingItemChage(event){
    const key = event.target.id; 
    setForm({...form, [key]:event.target.value})

  }


  return (
    <form className="NewItem" onSubmit={itemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" id="name" onChange={onShoppingItemChage} />
      </label>

      <label>
        Category:
        <select name="category" id="category" value={form.category} onChange={onShoppingItemChage}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
