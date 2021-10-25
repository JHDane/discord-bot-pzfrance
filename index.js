require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client({

    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]

});

bot.on("ready", () => {
   console.log("bot rdy");
});

bot.on("messageCreate", message => {
    if(message.author.bot) return;

        // Vérification des liens du workshop
        channelId = message.channel.id;

        url = message.content;
        urlWorkshopVerify1 = url.substring(0,51);
        urlWorkshopVerify2 = url.substring(0,48);
        urlWorkshopVerify3 = url.substring(0,17); // GIF

        if(channelId != "900399064871489566" && urlWorkshopVerify3 === "https://tenor.com")
        {
            const gif = new Discord.MessageEmbed()
                .setColor(0x3498DB)
                .setAuthor("Spiffo France BOT", "https://pzwiki.net/w/images/b/b3/Be_crafty.png")
                .setTitle("Les GIFs ne sont pas autorisés dans ce channel")
                .setImage("https://pzwiki.net/w/images/3/37/Spiffo_MODS_04.png")
                .setTimestamp()

            message.delete(url);
            message.author.send({ embeds: [gif] });
        }
        else if (channelId === "896421544660701205" && channelId === "896421379463848038" && urlWorkshopVerify3 != "https://tenor.com")
        {
            if(urlWorkshopVerify1 === 'https://steamcommunity.com/sharedfiles/filedetails/' || urlWorkshopVerify2 === 'https://steamcommunity.com/workshop/filedetails/') {
                message.delete(url);
                message.channel.send(url);
            }
            else
            {
                const wkLink = new Discord.MessageEmbed()
                    .setColor(0x3498DB)
                    .setAuthor("Spiffo France BOT", "https://pzwiki.net/w/images/b/b3/Be_crafty.png")
                    .setTitle("L'URL du mod est incorrect")
                    .addField("\u200b","Exemple")
                    .addFields(
                        { name: "\u200b",value:"https://steamcommunity.com/sharedfiles/filedetails/?id=0000"},
                        { name: "\u200b",value:"https://steamcommunity.com/workshop/filedetails/?id=00000"}
                    )
                    .setImage("https://pzwiki.net/w/images/3/37/Spiffo_rummage.png")
                    .setTimestamp()

                message.delete(wkLink);
                message.author.send({ embeds: [wkLink] });
            }
        }


});

bot.login(process.env.PZFRANCE);
