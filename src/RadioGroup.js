import React from 'react'

const RadioGroup = ({ label, value, onChange, options }) => {
  const name = label.replace(/\s/g, '_').toLowerCase()

  const handleClick = (e) => {
    onChange(e.target.value)
  }

  const renderInput = (inputValue) => {
    return (
      <label htmlFor={name}>
        <input
          onChange={handleClick}
          name={name}
          value={inputValue.replace(/\s/g, '_').toLowerCase()}
          selected={value === inputValue}
          type='radio'
        />
        {inputValue}
      </label>
    )
  }

  return (
    <div>
      <h4>{label}</h4>
      {options.map(renderInput)}
    </div>
  )
}

export default RadioGroup
