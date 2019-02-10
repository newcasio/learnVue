let a = new Vue({
  el: "#app",
  data: {
    herd: [{ text: "black" }, { text: "charlie" }, { text: "block" }]
  }
});

a.herd.push({ text: "long" });
