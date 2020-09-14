import React from 'react'
import relaseImg from  '../images/release.png';
import despesaImg from  '../images/despesas.png';
import receitaImg from  '../images/receitas.png';
import saldoImg from  '../images/saldo.png';

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
          onEditTransaction,
          onNewTransaction ,
          onRevenues,
          onExpenses,
          onBalance ,
          onReleases
 }) {

  const { 
          transactionStyle, 
          butttonAction   , 
          painelResume    , 
          selectItems     ,
          filterItems
        } = styles;
  return (
    
      <div className="container">
        
        
        
        <div style={painelResume}>
        <div className="input-field">
          <select 
            style={selectItems}
            className="browser-default"
            value={onCurrentPeriod} 
            onChange={onPeriodChange}
          > 
            {periods.map((period) => {
            return <option key={period}>{period}</option>
            })} 
          </select>
        </div>
          
          <div className="chip">
          <img src={relaseImg} alt="Lançamentos"/>
            <strong>Lançamentos: </strong>
            { onReleases }
          
          </div>
          <div className="chip">
          <img src={receitaImg} alt="Receitas"/>
            <strong>Receitas: </strong>
            { onRevenues }
          </div>
          <div className="chip">
          <img src={despesaImg} alt="Despesas"/>
            <strong>Despesas: </strong>
            { onExpenses }
          </div>
          <div className="chip">
          <img src={saldoImg} alt="Saldo"/>
            <strong>Saldo: </strong>
            { onBalance }
          </div>
          
        </div>

    <div style={filterItems}>
      <div className="input-field col s6">
              <button 
                className='waves-effect waves-light btn' 
                onClick={onNewTransaction}
              >
                Novo Lançamento
              </button>         

              <input 
              type='text' 
              placeholder='Filtro...' 
              value={filteredText}
              onChange={onFilterdText}
            />
          
        <label for="icon_prefix2">Filtro...</label>
      </div>
        
    </div>        

    
      
                
   

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
              Excluir
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

    </div>
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
    
  },
  painelResume:{
    padding: '20px',
    margin: '20px',
    border: '1px solid lightgray',
    borderRadius: '5px',
    marginLeft: '20px',
    alignItems: 'center',
    alignContent: 'center'  ,
    flexDirection: 'row',
    display: 'flex'

  },
  selectItems:{
    marginRight: '20px',
    padding: '10px'
  },
  filterItems: {
    flexDirection: 'column',
    display: 'flex',
    margin: '10px',
    padding: '10px',
    
  }
}