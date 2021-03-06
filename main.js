const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

const prefix = 'p!'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('I Like Planes is online!');
});

client.on('guildMemberAdd' , guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('866022941220012075').send(`Welcome <@${guildMember.user.id}> to I Like Planes server! Make sure you check out the rule channel`);
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }else if (command === 'rules'){
        client.commands.get('rules').execute(message, args,  Discord);
    }else if (command ==='clear'){
        client.commands.get('clear').execute(message, args);
    }else if (command ==='mute'){
        client.commands.get('mute').execute(message, args);
    }else if (command ==='unmute'){
        client.commands.get('unmute').execute(message, args);
    }
    


});

client.login(config.token);