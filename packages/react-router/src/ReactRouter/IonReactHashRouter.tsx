import React from 'react';
import type { HashRouterProps } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { IonRouter } from './IonRouter';

export class IonReactHashRouter extends React.Component<HashRouterProps> {
  render() {
    const { children, ...props } = this.props;
    return (
      <HashRouter {...props}>
        <IonRouter>{children}</IonRouter>
      </HashRouter>
    );
  }
}
