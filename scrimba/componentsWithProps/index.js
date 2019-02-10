Vue.component("dooo", {
  props: ["whatever"],
  template: "<li>{{whatever.item}}</li>"
});

let a = new Vue({
  el: "#app",
  data: {
    nameLink: [
      { id: 0, item: "string" },
      { id: 1, item: "wool" },
      { id: 2, item: "sam" }
    ]
  }
});
