import { readFileSync } from "fs";
import { client } from "./index.js";

async function getTopPost(guildName) {
  return client.guilds.get(guildName).fetchPosts("top", 2, 1).catch(async e => {
    console.log("Failed to get " + guildName + "... Retrying");
    return await getTopPost(guildName);
  });
}

export default async function guildDetails() {
  let guilds = [];
  readFileSync("guildlist.txt", "utf-8")
    .split(/\r?\n/)
    .forEach((line) => {
      if (!line.startsWith("#")) {
        guilds.push(line.split("+")[1]);
      }
    });

  let toplist = [];

  for (let i = 0; i < guilds.length; i++) {
    let topTwo = await getTopPost(guilds[i]);
    toplist.push(...topTwo);
  }

  toplist = toplist.sort((a, b) => {
    return b.votes.score - a.votes.score;
  });

  toplist.forEach(topPost => {
    console.log("Votes: " + topPost.votes.score + " --- Url: " + topPost.full_link);
  });
}