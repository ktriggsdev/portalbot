module.exports = {
    name: "close",
    type: "messageCreate",
    code: `$onlyIf[$getVar[isTicket;$channelID]==True;]
$author[Portal Tickets;$userAvatar[$botID]]
$description[Are you sure to close this ticket?]
$footer[Executed by $username;$guildIcon]
$addActionRow
$addButton[Yes;Yes;Success;✅]
`
}