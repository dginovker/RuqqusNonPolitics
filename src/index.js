import Ruqqus from "ruqqus-js";
import guildDetails from "./guildDetails.js";
import dotenv from "dotenv";
dotenv.config();

// Create a new Client instance
export const client = new Ruqqus.Client({
  id: process.env.ID,
  token: process.env.CLIENT_SECRET,
  code: process.env.FUNNY_AUTH.split("=")[1].split("&")[0],
});

// Login event
client.on("login", async () => {
  guildDetails();
});
