const fs = require('fs');
const path = require('path');

const args = process?.argv?.slice(2);
const newFragmentName = args?.[0];

if (!newFragmentName) {
    console.error("Component name is required");
    return;
}

const renderComponentTemplate = (componentName, routePath) => (`
const voltran = require('@voltran/core');

import React from 'react';
import classNames from 'classnames';

import ROUTE_PATHS from '../../appRoute/routeConstants';

import style from './${componentName}.scss';

function ${componentName}({ initialState }) {
  return (
    <div className={classNames(style.root)}>
      <div className={classNames(style.container)}>
        <h1>Welcome to the VoltranJS</h1>
      </div>
    </div>
  );
}

const component = voltran.default.withBaseComponent(${componentName}, ROUTE_PATHS.${routePath});

export default component;
`);

const createComponet = () => {
    const componetName = newFragmentName;
    const routeName = newFragmentName?.toUpperCase();

    const fileContents = [{
        ext: 'js',
        renderFn: renderComponentTemplate
    },
    {
        ext: 'scss',
        renderFn: () => ''
    }
    ];

    const partialsFolder = path.resolve('src', 'partials', componetName);

    fs.mkdir(partialsFolder, () => {
        fileContents.map(fileContent => {
            const componentFolder = path.resolve('src', 'partials', componetName, `${componetName}.${fileContent?.ext}`);
            fs.writeFileSync(componentFolder, fileContent?.renderFn(componetName, routeName), { encoding: 'utf-8' });
        })
    });
}

createComponet();