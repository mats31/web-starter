import VueRouter from 'vue-router';

import HomeComponent from '../containers/Home/Home';

Vue.use( VueRouter );

export default class Router extends VueRouter {

  constructor() {

    super({
      hashbang: false,
      pushState: true,
      history: true,
      abstract: false,
      saveScrollPosition: false,
      transitionOnLoad: false,
    });

    this.path = '/';
    this.firstRoute = true;
    this.routeTimeout = null;


    this.map({

      '*': {
        name: 'home',
        component: HomeComponent,
      },

    });
  }
}