let a = new Vue({
  el: "#app",
  data: {
    thismessage: "Hello brad"
  },
  methods: {
    handleClick() {
      console.log("The button has been clicked");
      this.thismessage = this.thismessage
        .split(" ")
        .reverse()
        .join(" ");
    }
  }
});
