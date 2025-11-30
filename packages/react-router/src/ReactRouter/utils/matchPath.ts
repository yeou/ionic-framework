import { matchPath as reactRouterMatchPath } from 'react-router-dom';

interface MatchPathOptions {
  pathname: string;
  componentProps: {
    path?: string;
    from?: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
  };
}

export const matchPath = ({
  pathname,
  componentProps,
}: MatchPathOptions) => {
  const path = componentProps.path || componentProps.from;
  const { exact, sensitive } = componentProps;

  if (!path) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/',
    };
  }

  const match = reactRouterMatchPath(
    {
      path,
      caseSensitive: sensitive,
      end: exact,
    },
    pathname
  );

  if (!match) {
    return null;
  }

  return {
    path: match.pattern.path,
    url: match.pathname,
    isExact: match.pathname === pathname,
    params: match.params,
  };
};
