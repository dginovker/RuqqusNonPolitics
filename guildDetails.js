const client = require("./index").client;

function getTopPost(guildName) {
  console.log(guildName);
  console.log(client.guilds.get(guildName));
  console.log(
    client.guilds
      .get(guildName)
      .fetchPosts((sort = "new"), (limit = "1"), (page = 1))
  ); // sort=top&t=day
}

export default () => {
  require("fs")
    .readFileSync("guildlist.txt", "utf-8")
    .split(/\r?\n/)
    .forEach((line) => {
      if (!line.startsWith("#")) {
        getTopPost(line.split("+")[1]);
      }
    });
};
