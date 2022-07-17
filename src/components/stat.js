import React from "react";

export default function Stat({ statName = '', statNumber = ''}) {
  return (
    <div className='flex-col stat-nums center'>
      <p>{statName}</p>
      <p className='self-center'>{statNumber}</p>
    </div>
  )
}