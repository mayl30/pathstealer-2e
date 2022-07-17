import React from "react";
import BasicsAndStats from "./basics-and-stats";
import AcAndSaves from "./ac-and-saves";
import RestAndConditions from "./rest-and-conditions";

export default function MainContent() {
  return (
    <div className='main-content-top'>
      <div className='left'>
        <div className='top'>
          <BasicsAndStats />
        </div>
        <div className='bottom'>
          <AcAndSaves />
        </div>
      </div>
      <div className='right'>
        <RestAndConditions />
      </div>
    </div>
  )
}