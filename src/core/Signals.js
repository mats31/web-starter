import Signal from 'min-signal';

class Signals {

  constructor() {

    this.onAssetsLoaded = new Signal();
  }
}

window.Signals = new Signals();

export default window.Signals;
