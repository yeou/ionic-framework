import React from 'react';
import type { BrowserRouterProps } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { IonRouter } from './IonRouter';

export class IonReactRouter extends React.Component<BrowserRouterProps> {
  render() {
    const { children, ...props } = this.props;
    return (
      <BrowserRouter {...props}>
        <IonRouter>{children}</IonRouter>
      </BrowserRouter>
    );
  }
}
