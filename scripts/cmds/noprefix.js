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
  ifonChat: async function ({ event, message }) {
  if (!event.body) return;

  const msg = event.body.toLowerCase();

  // 🔐 OWNER UID (নিজের UID ঠিক রাখো)
  const OWNER_ID = "61579347293903";

  // 👑 শুধু তুমি লিখলে
  if (String(event.senderID) === OWNER_ID) {
    await message.reply("yes boss 😎");
    return;
  }

  // 🤖 অন্য সবার জন্য autoreply
  const qaList = [
    {
      keyullash: ["assalamualaikum", "আসসালামু আলাইকুম"],
      reply: "Walikumassalam"
    },
    {
      keyullash: ["tafir", "tafir vai"],
      reply: "Boss akhn busy ase 🙂 ki bolben amk bolen"
    }
  ];

  for (const item of qaList) {
    if (item.keyullash.some(kw => msg.includes(kw))) {
      await message.reply(item.reply);
      return;
    }
  }
}
	}
