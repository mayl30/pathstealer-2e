import React from "react";
import OptionModal from "./option-modal";

export default function BasicsAndStats() {

  const level = '2'
  const name = 'Drix'
  const size = ''
  const speed = ''

  return (
    <div className='basics-and-stats'>
      <div className='basics'>
        <OptionModal title='Level' description={level}/>
        <OptionModal title='Character Name' description={name} />
      </div>
      <div className='stats'>
        <div className='size'>Medium</div>
        <div className='speed'>25ft</div>
      </div>
    </div>
  )
}