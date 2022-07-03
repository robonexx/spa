console.log('js file is attatched');

const navigate = (url) => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    { path: '/404', view: () => console.log('Error 404, page not found') },
    { path: '/', view: () => console.log('viewing home page') },
    { path: '/about', view: () => console.log('viewing about page') },
    { path: '/work', view: () => console.log('viewing work page') },
  ];

  // check each route for match
  const matches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = matches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  console.log(match.route.view());
};

window.onpopstate = router;
document.addEventListener('DOMContentLoaded', () => {
  // preventing a page refresh
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('.nav_link')) {
      e.preventDefault();
      navigate(e.target.href);
    }
  });
  router();
});
