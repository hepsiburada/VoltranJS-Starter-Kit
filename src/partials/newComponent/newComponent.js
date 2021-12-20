
const voltran = require('@voltran/core');

import React from 'react';
import classNames from 'classnames';

import ROUTE_PATHS from '../../appRoute/routeConstants';

import style from './newComponent.scss';

function newComponent({ initialState }) {
  return (
    <div className={classNames(style.root)}>
      <div className={classNames(style.container)}>
        <h1>Welcome to the VoltranJS</h1>
      </div>
    </div>
  );
}

const component = voltran.default.withBaseComponent(newComponent, ROUTE_PATHS.NEWCOMPONENT);

export default component;
