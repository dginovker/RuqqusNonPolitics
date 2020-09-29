import Ruqqus from "ruqqus-js";
import guildDetails from "./guildDetails.js";
import dotenv from "dotenv";
dotenv.config();

// Create a new Client instance
export const client = new Ruqqus.Client({
  id: process.env.ID,
  token: process.env.CLIENT_SECRET,
  code: process.env.AUTHCODE,
});

// Login event
client.on("login", async () => {
  guildDetails();
});

// Post event
client.on("post", (post, data) => {
  console.log("Post event!");
  console.log(data);
});

// Comment event
client.on("comment", (comment, data) => {
  console.log("Comment event!");
  console.log(data);
});
