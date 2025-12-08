import React from 'react';
import type { MemoryRouterProps } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

import { IonRouter } from './IonRouter';

export class IonReactMemoryRouter extends React.Component<MemoryRouterProps> {
  render() {
    const { children, ...props } = this.props;
    return (
      <MemoryRouter {...props}>
        <IonRouter>{children}</IonRouter>
      </MemoryRouter>
    );
  }
}
