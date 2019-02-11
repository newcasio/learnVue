let a = new Vue({
  el: "#app",
  data: {
    clicks: 0
    // blah: 0  this is must be removed to because this value is no longer statically stored, it is computed on the fly from the clicks data.
  },
  methods: {
    clickHandler() {
      this.clicks = this.clicks + 1;
      // this.clicks++
      // this.blah = this.clicks * 2;  this is removed because calculation is done in computed
    }
  },
  computed: {
    blah() {
      return this.clicks * 2;
    }
  }
});

// computed property, one property depends on another property
