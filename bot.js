const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`tkota online`);  
});

client.on('ready', async() => {
var server = "431925238524280835"; // ايدي السررفر
var channel = "513694307241426944";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });



client2.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client2.on('ready', async() => {
var server = "431925238524280835"; // ايدي السررفر
var channel = "513694307241426944";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , Krisps , **')
    },305);
})

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 


client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN_2);
