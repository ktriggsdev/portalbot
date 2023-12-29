const { ForgeClient } = require("forgescript")
const { ForgeDB } = require("forgedb")

// Client initialization
const client = new ForgeClient({
    "intents": [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent",
        "GuildScheduledEvents",
        "AutoModerationConfiguration",
        "AutoModerationExecution"
    ],
    "prefixes": [
        "ds!"
    ],
    "events": [
        "autoModerationActionExecution",
        "channelCreate",
        "channelDelete",
        "channelUpdate",
        "debug",
        "emojiCreate",
        "emojiDelete",
        "emojiUpdate",
        "error",
        "guildAuditLogEntryCreate",
        "guildCreate",
        "guildDelete",
        "guildMemberAdd",
        "guildMemberRemove",
        "guildMemberUpdate",
        "guildUpdate",
        "interactionCreate",
        "inviteCreate",
        "inviteDelete",
        "messageCreate",
        "messageDelete",
        "messageReactionAdd",
        "messageReactionRemove",
        "messageUpdate",
        "presenceUpdate",
        "ready",
        "roleCreate",
        "roleDelete",
        "roleUpdate",
        "shardDisconnect",
        "shardError",
        "shardReady",
        "shardReconnecting",
        "shardResume",
        "userUpdate",
        "voiceStateUpdate"
    ],
    "extensions": [
        new ForgeDB(),
    ]
})

// Load the commands
client.commands.load("commands")
client.applicationCommands.load("slashes")


// Your bot token
client.login("MTE4Nzc0NjU4MzU3NjU3NjA3Mg.GHKg_3.5yLQ0IVR0qDl2unqb36hB8QScp2twePSzHo0do");