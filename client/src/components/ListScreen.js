import React from 'react'

const EARNING_COLOR = '#81ecec'
const EXPENSE_COLOR = '#fab1a0'

export default function ListScreen({
          transactions, 
          periods, 
          filteredText, 
          onFilterdText, 
          onDeleteTransaction,
          onPeriodChange,
          onCurrentPeriod,
          onEditTransaction
 }) {

  const { transactionStyle, butttonAction } = styles;
  return (
    <>
    <select 
    className="browser-default"
    value={onCurrentPeriod} 
    onChange={onPeriodChange}
  > 
    {periods.map((period) => {
    return <option key={period}>{period}</option>
    })}
  </select>


    <input 
      type='text' 
      placeholder='Filtro...' 
      value={filteredText}
      onChange={onFilterdText}
    />

  {
    transactions.map((item) => {
      const currentColor = item.type === '+' ? EARNING_COLOR : EXPENSE_COLOR
      return (
        <div key={item._id} style={{...transactionStyle, backgroundColor: currentColor}}>
          <span >
            <button 
              style={butttonAction}  
              className='waves-effect waves-light btn'
              onClick={onEditTransaction}
              id={item._id}
            >
              Editar
            </button>
            
            <button 
              style={butttonAction} 
              className='waves-effect waves-light btn red darken-4'
              onClick={onDeleteTransaction}
              id={item._id}
            >
              Ecluir
            </button>
          </span>
          <span>
            {item.yearMonthDay} -{' '}
            <strong>{item.category}</strong> -{' '}
            {item.description} - {item.value}
          </span>
          
        </div>

        )
    })}

    </>
  )
}

const styles = {
  transactionStyle: {
    padding: '5px',
    margin: '5px',
    border: '1px solid lightgray',
    borderRadius: '5px'
  },
  butttonAction:{
    alignItems: 'left',
    marginRight: '10px',
    alignContent: 'right',
    
  }
}