import React, { useState, useEffect } from 'react'

export default function MaintenanceScreen({transaction}) {
  
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('-');

  useEffect(() =>{
    if (!transaction) {
      return;
    }

    const {description, type, value, category, yearMonthDay} = transaction;

    setDescription(description);
    setValue(value);
    setCategory(category);
    setDate(yearMonthDay);
    setType(type)

  },[transaction])

  const handleDescriptionChange = (event) =>{
    const newDescription = event.target.value.trim();
    setDescription(newDescription);
  }
  
  const handleValueChange = (event) =>{
    const newValue = Number(event.target.value);
    setValue(newValue);
  }
  
  const handleCategoryChange = (event) =>{
    const newCategory = event.target.value.trim();
    setCategory(newCategory);
  }


  return (
    <>
        <div className="input-field">
          <input type="text" 
            value={description} 
            id="inputDescription" 
            onChange={handleDescriptionChange}
          />
          <label htmlFor="inputDescription" className="active">
            Descrição:
          </label>
        </div>
        
        <div className="input-field">
          <input type="number" 
            value={value} 
            id="inputValue" 
            onChange={handleValueChange}
          />
          <label htmlFor="inputValue" className="active">
            Valor:
          </label>
        </div>

        <div className="input-field">
          <input type="text" 
            value={category} 
            id="inputCategory" 
            onChange={handleCategoryChange}
          />
          <label htmlFor="inputCategory" className="active">
            Categoria:
          </label>
        </div>

     </>   
      
  )
}
