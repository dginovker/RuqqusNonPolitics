import { readFileSync } from "fs";
import { client } from "./index.js";

function getTopPost(guildName) {
  client.guilds.get(guildName).fetchPosts("new", 24, 1).then(res => {
    console.log(res);
  });
}

export default function guildDetails() {
  readFileSync("guildlist.txt", "utf-8")
    .split(/\r?\n/)
    .forEach((line) => {
      if (!line.startsWith("#")) {
        getTopPost(line.split("+")[1]);
      }
    });
}