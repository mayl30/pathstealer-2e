import React from "react";
import OptionModal from "./option-modal"

export default function LeftRail() {

  const planContent = [
    {
      icon: '/sword-icon.png',
      title: 'Ancestry',
      description: 'Human'
    },
    {
      icon: '/sword-icon.png',
      title: 'Background',
      description: 'Field Medic'
    }
  ]
  return (
    <div className="left-rail-content">
      <h3 className="title">Feats and Heritage</h3>
      <div className='button-section'>
        {
          planContent.map((planItem, i) => <div key={i} style={{ paddingBottom: '5px' }}> <OptionModal {...planItem} /> </div>)
        }
      </div>

    </div>
  )
}