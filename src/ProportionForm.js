import React from 'react'

const ProportionForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleProportionSubmit}>
        <input
          type='text'
          name='proportions'
          placeholder='Ingredient Name'
          value={props.ingredient}
          onChange={props.handleChange} />
        <input
          type='text'
          name='amount'
          placeholder='Quantity'
          value={props.amount}
          onChange={props.handleChange} /><br />
      </form>
    </div>
  )
}

export default ProportionForm


// create another form
// pass down props
// - this.state.proportions
// - this.handleChange
// - this.handleSubmit
