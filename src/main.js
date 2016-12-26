import domready from 'domready';

import Application from './containers/Application/Application';
import Router from './core/Router';
import './stylesheets/main.styl';

class Main {

  constructor() {

    this.router = new Router();

    this.start();
  }

  start() {
    new Application({
      router: this.router,
    }).$mount('#application');
  }
}

domready(() => {

  new Main();
});
