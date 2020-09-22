const Ruqqus = require("ruqqus-js");
 
// Create a new Client instance
const client = new Ruqqus.Client({
  id: "CLIENT_ID",
  token: "CLIENT_SECRET",
  code: "AUTHCODE"
});
 
// Login event
client.on("login", async () => {
  console.log(client.guilds.get("RuqqusAPI"));

  console.log(Client.guilds.get("RuqqusAPI").fetchPosts(sort="new", limit="1", page=1)); // sort=top&t=day
});
 
// Post event
client.on("post", (post, data) => { 
  console.log(data);
});
 
// Comment event
client.on("comment", (comment, data) => {
  console.log(data);
});