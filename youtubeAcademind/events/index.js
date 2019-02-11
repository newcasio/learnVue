let a = new Vue({
  el: "#app",
  data: {
    title: "Hello world"
  },
  methods: {
    clickHandler() {
      this.title = this.title
        .split("")
        .reverse()
        .join("");
    }
  }
});
