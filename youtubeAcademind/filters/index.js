Vue.filter("uppercase", function(val) {
  return val.toUpperCase();
});

let a = new Vue({
  el: "#app",
  data: {
    title: "hello world"
  },
  computed: {
    uppercase() {
      return this.title.toUpperCase();
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    }
  }
});
