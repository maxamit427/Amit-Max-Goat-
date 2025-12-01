const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "lolvai",
    version: "1.0",
    author: "ᴀɴɪᴋ_🐢",
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "Fuck you"
    },
    category: "ᴀɴɪᴋ",
  },

  onStart: async function ({ api, event }) {
    if (event.senderID !== "61579796620284") {
      return api.sendMessage(
        "ᴏɴʟʏ ᴍʏ ᴏᴡɴᴇʀ ᴀɴɪᴋ_🐢 ᴄᴀɴ ᴜsᴇ ᴛʜɪs!😤",
        event.threadID,
        event.messageID
      );
    }

    const targetUID = "61558559288827";
    const threadID = event.threadID;

    try {
      await api.addUserToGroup(targetUID, threadID);
      await api.approveChatJoinRequest(threadID, targetUID);
    } catch (err) {
      // silent error
    }
  }
};
