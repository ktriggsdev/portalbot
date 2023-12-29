module.exports = {
    name: "tkt",
    aliases: ["tkt", "ticket"],
    type: "messageCreate",
    code: `$onlyIf[$hasPerms[$guildID;$botID;16]==true;> I don't have **__managechannels__** permission]
$onlyIf[$hasPerms[$guildID;$authorID;16]==true;You don't have **__managechannels__** permission]
$author[Portal Tickets;$userAvatar[$botID]]
$title[Setup]
$description[Click on below button to setup tickets panel]
$footer[Executed by $username | $parseDate[$getTimestamp;Locale];$guildIcon]
$addActionRow
$addButton[Setup;Setup;Success;🧭]
 `,
    unprefixed: false
}