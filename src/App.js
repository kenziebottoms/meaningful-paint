import React, { useState } from 'react'
import RadioGroup from './RadioGroup'

function App() {
  const [baseColor, setBaseColor] = useState('black')
  return (
    <div className='App'>
      <RadioGroup
        label='Base Color'
        value={baseColor}
        onChange={setBaseColor}
        options={[
          'Black',
          'Chestnut',
          'Bay',
          'Seal Brown',
        ]}
      />
    </div>
  )
}

export default App
   