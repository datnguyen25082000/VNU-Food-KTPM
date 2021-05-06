import React from 'react';
import { useLocation } from 'react-router-dom';
import './OnlyHeaderLayout.scss';

export const OnlyHeaderLayout = ({ children, header }) => {
  return (
    <div className={'only-header'}>
      <div className="only-header__header">
        <div className="only-header__container">{header}</div>
      </div>
      <div className={'only-header__center'}>{children}</div>
    </div>
  );
};
