import './loader.styl';

import template from './loader.html';

export default Vue.extend({

  template,

  data() {

    return {};
  },

  created() {

    Signals.onAssetLoaded.add(this.onAssetLoaded);
    Signals.onAssetsLoaded.add(this.onAssetsLoaded);
  },

  mounted() {},

  methods: {

    onAssetLoaded(percent) {
      console.log('asset: ', percent);
    },

    onAssetsLoaded(percent) {
      console.log('assets: ', percent);
    },
  },

  components: {},
});
