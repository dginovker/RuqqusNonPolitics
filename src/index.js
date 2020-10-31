import Ruqqus from "ruqqus-js";
import guildDetails from "./guildDetails.js";
import dotenv from "dotenv";
dotenv.config();

export const client = new Ruqqus.Client();

// Login event
client.on("login", async () => {
  guildDetails();
});
