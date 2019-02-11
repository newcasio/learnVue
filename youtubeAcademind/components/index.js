Vue.component("app-user", {
  data: function() {
    return {
      users: [
        { username: "aaa" },
        { username: "bbb" },
        { username: "ccc" },
        { username: "ddd" }
      ]
    };
  },
  template:
    '<div><div class="user" v-for="user in users"><p>Username: {{user.username}}</p></div></div>'
});

let a = new Vue({
  el: "#app",
  data: {
    title: "Hello world!",
    users: [
      { username: "aaa" },
      { username: "bbb" },
      { username: "ccc" },
      { username: "ddd" }
    ]
  }
});
