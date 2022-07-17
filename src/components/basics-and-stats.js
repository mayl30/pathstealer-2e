import React from "react";
import OptionModal from "./option-modal";
import Stat from "./stat";

import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function BasicsAndStats() {

  const level = '2'
  const name = 'Drix'
  const size = 'Medium'
  const speed = '25ft'

  const stats = [
    {
      statName: 'STR',
      statNumber: '+3'
    },
    {
      statName: 'DEX',
      statNumber: '+1'
    },
    {
      statName: 'CON',
      statNumber: '+3'
    },
    {
      statName: 'INT',
      statNumber: '-1'
    },
    {
      statName: 'WIS',
      statNumber: '+3'
    },
    {
      statName: 'CHA',
      statNumber: '+0'
    }
  ]

  return (
    <div className='basics-and-stats background-round'>
      <div className='basics'>
        <OptionModal title='Level' description={level} />
        <div style={{ width: '10px' }}></div>
        <OptionModal title='Character Name' description={name} />
      </div>

      <div className='stats center grid-container'>
        <div className='flex-row center size stat-grid-item'>
          <AlignHorizontalCenterIcon className="icon-color self-center size-icon" />
          <div className='flex-col'><span>Size</span><span>{size}</span></div>
        </div>

        <div className='flex-row center speed stat-grid-item'>
          <DirectionsRunIcon className="icon-color self-center size-icon" />
          <div className='flex-col'><span>Speed</span><span>{speed}</span></div>
        </div>

        <div className='stat-grid-item center stat-list'>
          {
            stats.map((stat, i) => <Stat {...stat}/> )
          }
        </div>
      </div>
    </div>
  )
}