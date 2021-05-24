const ROUTES = {
  home: '/',
  about: '/about',
  detail: { path: '/work/:id', to: '/work/' },
};

const MEDIAQUERIES = {
  mobile: 320,
  tablet: 768,
  labtop: 1440,
  desktop: 1920,
};

export { ROUTES, MEDIAQUERIES };
