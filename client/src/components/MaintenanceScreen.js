import React, { useState, useEffect } from 'react';

const INSERTING = 0;
const EDITING = 1;

function today(){
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0') ;
  const day   = (date.getDate() ).toString().padStart(2, '0') ;

  const today = `${year}-${month}-${day}`

  return today;
}

export default function MaintenanceScreen({
                                            transaction , 
                                            onCancel    , 
                                            onSave
                                          }) 
{
  
  const [description, setDescription] = useState('Nova Descrição')        ;
  const [value      , setValue      ] = useState(100)         ;
  const [category   , setCategory   ] = useState('Nova Categoria')        ;
  const [date       , setDate       ] = useState(today())        ;
  const [type       , setType       ] = useState('-')       ;
  const [mode       , setMode       ] = useState(INSERTING) ;

  useEffect(() =>{
    if (!transaction) {
      return;
    }

    const {
      description , 
      type        , 
      value       , 
      category    , 
      yearMonthDay
    } = transaction;

    setDescription  (description) ;
    setValue        (value)       ;
    setCategory     (category)    ;
    setDate         (yearMonthDay);
    setType         (type)        ;
    setMode         (EDITING)     ;

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
  
  const handleDateChange = (event) =>{
    const newDate = event.target.value;

    setDate(newDate);
  }

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    console.log(newType)
    setType(newType);
  }

  const handleSaveClick = () => {
    const newTransaction = {
      _id: !!transaction  ? transaction._id : null,
      description,
      value,
      type,
      yearMonthDay: date,
      category,
    };
    onSave(newTransaction);
  }


  return (
    <>
        
        <div style={{ marginBottom: '20px' }}>
          <span>
            <label>
              <input 
                name="expense_earning" 
                type="radio" 
                checked={type === '-'} 
                onChange={handleTypeChange}
                value="-"
              />
              <span>Despesas</span>
            </label>
            </span>
            <span>
            <label>
              <input 
                name="expense_earning" 
                type="radio" 
                checked={type === '+'} 
                onChange={handleTypeChange}
                value="+"
              />
              <span>Receitas</span>
            </label>
          </span>
        </div>


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
        
        <div className="input-field">
          <input type="date" 
            value={date} 
            id="inputDate" 
            onChange={handleDateChange}
          />
          <label htmlFor="inputDate" className="active">
            Data:
          </label>
        </div>

        <button   
          className='waves-effect waves-light btn'
          onClick={handleSaveClick}
        >
          Salvar
        </button>
        <button 
          className='waves-effect waves-light btn red darken-4'
          style={{marginLeft: '20px'}}
          onClick={onCancel}
        >
          Cancelar
        </button>

     </>   
      
  )
}
