/*
    Flame Nerimity Bot
    By Ryan "Edgewurth" Penfold

    Please read LICENSE
*/

var nj = require("@nerimity/nerimity.js");

const client = new nj.Client();


client.on(nj.Events.Ready, () => {
    console.log(`Connected as ${client.user?.username}!`);
});

client.on(nj.Events.MessageCreate, message => {
    console.log(message.content);
    if(message.content.startsWith("&")) // first check for the prefix
        if(message.user.id !== client.user.id) { // we need to check if the user id is not the bot!
            switch(message.content.split('&')[1]) { // now we check for a valid command using Switch/Case Statements.
                case "test":
                    message.channel.send("Hi! My name is Flame - and this is a debug message!");
            }
        }
});

console.log("")
console.log("Attempting to login using the token...");
client.login('token here');
