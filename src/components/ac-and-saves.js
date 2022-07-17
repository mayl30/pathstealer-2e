import React from "react";

export default function AcAndSaves() {
  return (
    <div className="ac-and-saves">
      <div className='ac'>
        15
      </div>
      <div className='hp-and-shield'>
        <div className='hp'>
          21/21
        </div>
        <div className='shield'>
          Shield?
        </div>
      </div>
      <div className='saves'>
        <div className='fortitude'>Fortitude: +7</div>
        <div className='Reflex'>Reflex: +3</div>
        <div className='Will'>Will: +5</div>
      </div>
    </div>
  )
}