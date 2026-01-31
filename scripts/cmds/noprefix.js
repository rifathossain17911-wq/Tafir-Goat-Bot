module.exports = {
	config: {
		name: "noprefix",
		version: "1.0",
		author: "MAHBUB ULLASH",
		countDown: 5,
		role: 0,
		shortDescription: "noprefix custom question and answer",
		longDescription: "noprefix custom question and answe",
		category: "custom reply",
	},
   
	onChat: async function ({ event, message }) {
  if (!event.body) return;

  const msg = event.body.trim().toLowerCase();

  // 🔐 তোমার UID
  const OWNER_ID = "61579347293903";

  // 👑 তুমি লিখলে "bot" (যেভাবেই লেখো)
  if (
    String(event.senderID) === OWNER_ID &&
    msg.includes("bot")
  ) {
    await message.reply("yes boss 😎");
    return;
  }

  // 🤖 অন্য সবার + তোমার normal autoreply
  const qaList = [
    {
      keyullash: ["assalamualaikum", "আসসালামু আলাইকুম"],
      reply: "Walikumassalam"
    },
    {
      keyullash: ["tafir"],
      reply: "Boss akhn busy ase 🙂 ki bolben amk bolen"
    }
  ];

  for (const item of qaList) {
    if (item.keyullash.some(k => msg.includes(k))) {
      await message.reply(item.reply);
      return;
    }
  }
}
