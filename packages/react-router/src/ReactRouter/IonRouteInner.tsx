import type { IonRouteProps } from '@ionic/react';
import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';

export const IonRouteInner: React.FC<IonRouteProps> = (props) => {
  const location = useLocation();
  const match = matchPath(
    { path: props.path || '', caseSensitive: false, end: props.exact },
    location.pathname
  );

  if (!match) {
    return null;
  }

  if (props.render) {
    return <>{props.render({ match, location } as any)}</>;
  }

  return null;
};
