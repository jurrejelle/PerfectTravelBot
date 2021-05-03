const tmi = require('tmi.js');
const fs = require('fs');

const config = require('./config.json');

// Define configuration options
const opts = {
    identity: {
        username: config.username,
        password: config.password,
    },
    channels: [
        ...config.channels,
        config.username
    ]
};

function saveConfig() {
    fs.writeFile('config.json', JSON.stringify(config, null, '  '), (e) => {
        console.error(e);
    });
}


// Create a client with our options
const client = new tmi.client(opts);

var dict = {};

dict["!perfecthelp"] = "Use !X for highroll chunk offset for an angle, !*X for all options for an angle. There's also !perfectabout, !perfecttravelstrat, !perfecttraveldemo, and !perfectsymbols";
dict["!perfectabout"] = "Bot made by Sharpieman20 and FourTwentyBlazeIt, hosted and cleaned up by unascribed";
dict["!perfectstrat"] = "This bot is made to do perfect travel. The goal is to travel to the stronghold in a single throw";
dict["!perfectdemo"] = "You can see a demonstration of the strategy by Four here: <LINK>";
dict["!perfectsymbols"] = "If you're having issues with the bot being timed out for excessive symbols, do X Y Z thing.";
dict["!addme"] = (tgt, ctx, msg, cmd) => {
    if (tgt === '#' + config.username.toLowerCase()) {
        if (config.channels.indexOf(ctx.username) === -1) {
            client.join('#' + ctx.username).then(() => {
                client.say(tgt, ctx.username + ": I've joined your chat and am waiting for commands there.");
                config.channels.push(ctx.username);
                saveConfig();
            }).catch((e) => {
                console.error(e);
                client.say(tgt, ctx.username + ": Sorry, I couldn't join your chat for some reason.");
            });
        } else {
            if (client.getChannels().indexOf('#' + ctx.username) === -1) {
                client.say(tgt, ctx.username + ": I should already be in your chat, but I'm not! Trying to join again...");
                client.join('#' + ctx.username).then(() => {
                    client.say(tgt, ctx.username + ": I've joined your chat.");
                }).catch((e) => {
                    console.error(e);
                    client.say(tgt, ctx.username + ": Sorry, I couldn't join your chat for some reason.");
                });
            } else {
                client.say(tgt, ctx.username + ": I'm already in your chat!");
            }
        }
    } else {
        console.log("Ignoring addme command in wrong channel: " + tgt);
    }
};
dict["!removeme"] = (tgt, ctx, msg, cmd) => {
    if (tgt === '#' + config.username.toLowerCase()) {
        if (config.channels.indexOf(ctx.username) === -1) {
            if (client.getChannels().indexOf('#' + ctx.username) === -1) {
                client.say(tgt, ctx.username + ": I'm not in your chat!");
            } else {
                client.say(tgt, ctx.username + ": I shouldn't be in your chat, but I am! Leaving.");
                client.part('#' + ctx.username);
            }
        } else {
            client.part('#' + ctx.username);
            client.say(tgt, ctx.username + ": I've left your chat.");
            config.channels = config.channels.filter(it => it !== ctx.username);
            saveConfig();
        }
    } else {
        console.log("Ignoring removeme command in wrong channel: " + tgt);
    }
};

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();
dataX = {"-1":1,"-2":1,"-3":1,"-4":1,"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"-5":2,"-6":2,"-7":2,"-8":2,"-9":2,"10":2,"6":2,"7":2,"8":2,"9":2,"-10":3,"11":3,"-11":3,"12":3,"-12":3,"13":3,"-13":3,"14":3,"-14":3,"15":3,"-15":4,"16":4,"-16":4,"17":4,"-17":4,"18":4,"-18":4,"19":4,"-19":4,"20":4,"-20":5,"21":5,"-21":5,"22":5,"-22":5,"23":5,"-23":5,"24":5,"-24":5,"25":5,"-25":6,"26":6,"-26":6,"27":6,"28":6,"29":6,"30":6,"-27":6,"-28":6,"-29":6,"-30":7,"31":7,"-31":7,"32":7,"-32":7,"33":7,"-33":7,"34":7,"-34":7,"35":7,"-35":8,"36":8,"-36":8,"37":8,"-37":8,"38":8,"-38":8,"39":8,"-39":8,"40":8,"-40":9,"41":9,"-41":9,"42":9,"-42":9,"43":9,"-43":9,"44":9,"-44":9,"45":9,"-45":10,"46":10,"-46":10,"47":10,"-47":10,"48":10,"-48":10,"49":10,"-49":10,"50":10,"-50":11,"51":11,"-51":11,"52":11,"-52":11,"53":11,"-53":11,"54":11,"-54":11,"55":11,"-55":12,"56":12,"-56":12,"57":12,"-57":12,"58":12,"-58":12,"59":12,"-59":12,"60":12,"-60":13,"61":13,"-61":13,"62":13,"-62":13,"63":13,"-63":13,"64":13,"-64":13,"65":13,"-65":14,"66":14,"-66":14,"67":14,"-67":14,"68":14,"-68":14,"69":14,"-69":14,"70":14,"-70":15,"71":15,"-71":15,"72":15,"-72":15,"73":15,"-73":15,"74":15,"-74":15,"75":15,"-75":16,"76":16,"-76":16,"77":16,"-77":16,"78":16,"-78":16,"79":16,"-79":16,"80":16,"-80":17,"81":17,"-81":17,"82":17,"-82":17,"83":17,"-83":17,"84":17,"-84":17,"85":17,"-85":18,"86":18,"-86":18,"87":18,"-87":18,"88":18,"-88":18,"89":18,"-89":18,"90":18,"-90":19,"91":19,"-91":19,"92":19,"-92":19,"93":19,"-93":19,"94":19,"-94":19,"95":19,"-95":20,"96":20,"-96":20,"97":20,"-97":20,"98":20,"-98":20,"99":20,"-99":20,"100":20,"-100":21,"101":21,"-101":21,"102":21,"-102":21,"103":21,"-103":21,"104":21,"-104":21,"105":21,"-105":22,"106":22,"-106":22,"107":22,"-107":22,"108":22,"-108":22,"109":22,"-109":22,"110":22,"-110":23,"111":23,"-111":23,"112":23,"-112":23,"113":23,"-113":23,"114":23,"-114":23,"115":23,"-115":24,"116":24,"-116":24,"117":24,"-117":24,"118":24,"-118":24,"119":24,"-119":24,"120":24,"-120":25,"121":25,"-121":25,"122":25,"-122":25,"123":25,"-123":25,"124":25,"-124":25,"125":25,"-125":26,"126":26,"-126":26,"127":26,"-127":26,"-128":26}

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    if (self) {
        return;
    } // Ignore messages from the bot

    // Remove whitespace from chat message
    const cmd = msg.trim();
    if (cmd.length === 0) return;

    var txt;

    if (dict[cmd]) {
        console.log("Responding to " + context.username + " with built-in command: " + cmd);
        let builtin = dict[cmd];
        if (typeof builtin === "function") {
            builtin(target, context, msg, cmd);
            return;
        } else {
            txt = builtin;
        }
    } else if (cmd[0] == '!') {
        console.log("Responding to " + context.username + " with angle lookup: " + cmd);
        let rem = cmd.substring(1);
        if (rem.length === 0) return;
        // make sure it's a valid number before we try parsing it
        //if (!/-?[0-9]+(\.[0-9]+)?/.exec(rem)) return;
        rem = rem.split(" ");
        if (rem.length != 3) {
            client.say(target, "Please use valid format: !x z angle");
            return false;
        }
        //X = dataX-1;
        //Number = rem[0]
        //if((-4-5*X <= Number && Number <= -5*X) || (5*X <= Number && Number <= 5*X+5)){
        dataIndex = dataX[rem[0]]
        url = "raw.githubusercontent.com"
        path = "/PerfectCDData/data" + dataIndex + "/main/" + rem[0] + "/" + rem[1] + ".json";
        const https = require('https');

        https.get('https://' + url + path, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                try {
                    var ret = JSON.parse(data);
                } catch (e) {
                    return;
                }
                //console.log(data);

                console.log(ret[rem[2]])
                client.say(target, ret[rem[2]].join("   |   "));
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    } else {
        txt = "None";
    }

    console.log(txt);
    //client.say(target, txt);


}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}