// import React, { useEffect } from 'react';
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTelegram } from "../../hooks/useTelegram";

import './layout.css';


const LayOut = ({children}) => {
  // const { tg, backOnClick, backOffClick } = useTelegram();
  // const history = useNavigate();
  // const location = useLocation();

  // const clickBack = () => history(-1);

  // useEffect(() => {
  //   if(!tg.isExpanded) {
  //     tg.expand();
  //   }
  //   tg.BackButton.show();
  // }, [tg.isExpanded]);

  // useEffect(() => {
  //   backOnClick(clickBack);
  //   return () => {
  //     backOffClick(clickBack);
  //   }
  // }, [location.pathname]);


  return (
    <div className='layout'>
      {children}
    </div>
  )
};

export default LayOut;