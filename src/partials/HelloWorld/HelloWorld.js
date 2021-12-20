const voltran = require('@voltran/core');

import React from 'react';
import classNames from 'classnames';

import appConfig from '../../appConfig';
import ROUTE_PATHS from '../../appRoute/routeConstants';

import style from './HelloWorld.scss';

function HelloWorld({ initialState }) {
  return (
    <div className={classNames(style.root)}>
      <div className={classNames(style.container)}>
        <h1>Welcome to the VoltranJS</h1>

        <span>Hello World! It is a Micro Frontend Library</span>
        <img className={style.voltran} src={`${appConfig.mediaUrl}/images/voltran.png`} />
      </div>
    </div>
  );
}

const component = voltran.default.withBaseComponent(HelloWorld, ROUTE_PATHS.HELLO_WORLD);

// component.services = [voltran.default.SERVICES.voltranapi]

/* component.getInitialState = (voltranApiClientManager, context) => {
  return voltranApiClientManager.get('/product').execute().then(response => response.data);
}; */

export default component;
