const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Calms Is One`)
    .setDescription(`
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("<a:emoji_54:853539663389523988>", <a:emoji_34:822641693387653182>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
