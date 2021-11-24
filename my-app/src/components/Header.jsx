import React, { useState } from 'react';
import { FcData } from './FcData';

// https://jp.finalfantasyxiv.com/lodestone/freecompany/9236038410806874376/

export const Header = () => {
  const [fcId, setFcId] = useState('');
  const handleChange = (e) => {
    const url = e.target.value;
    const fcNo = url.replace('https://jp.finalfantasyxiv.com/lodestone/freecompany/', '').replace('/','');
    setFcId(() => fcNo);
    console.log(`handleChange= ${fcNo}`);
  };
  const handleClick = () => {
    console.log(`click! ${fcId}`);
  };
  return (
    <header>
      <span>FC ID: {fcId}</span>
      <form method="POST">
        <input type="text" id="history_check" name="search" onChange={handleChange} value={fcId} />
        <input type="button" id="fc_set" value="設定" onClick={handleClick} />
        <input type="button" id="btn_clear" value="履歴消去" />
      </form>
      <FcData fcId={fcId} />
    </header>
  );
};