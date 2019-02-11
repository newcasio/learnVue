let a = new Vue({
  el: "#app",
  data: {
    visibility: true,
    persons: [
      { name: "Brad", age: 22 },
      { name: "charlie", age: 232 },
      { name: "llie", age: 13 }
    ]
  },
  methods: {
    show() {
      console.log("clicked");
      this.visibility = !this.visibility;
    }
  }
});
