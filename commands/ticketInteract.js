module.exports = {
    type: "interactionCreate",
    code: `
    $if[$customID==Ticket;$cooldown[tktCD;10s;$ephemeral > You're too fast for me wait $getCooldownTime[tktCD] to create a new ticket]
$color[c30010]
$onlyIf[$hasPerms[$guildID;$botID;16]==true;

> I don't have permissions to create and modify channels]    
$if[$createChannel[$guildID;ticket-$sum[$getVar[Tickets;$guildID];1];GuildText;Ticket of $username;$getVar[Ticket3;$guildID]]!=]

$addActionRow
$addButton[Close;Close;Danger;🔒]


$setVar[isTicket;$findChannel[ticket-$getVar[Tickets;$guildID]];True]

$setVar[Tickets;$guildID;$sum[$getVar[Tickets;$guildID];1]]

$setVar[tktOwner;$findChannel[ticket-$getVar[Tickets;$guildID]];$authorID] 

$setVar[tktNo;$channelID;$getVar[Tickets;$guildID]]
$sendMessage[$findChannel[ticket-$getVar[Tickets;$guildID]];<@$authorID>
$author[Portal tickets]
$description[Thank you for creating ticket $username
Click on **__Close__** button or type **__!close__** to close this ticket]]
$if[$removeChannelPerms[$findChannel[ticket-$getVar[Tickets;$guildID]];$guildID;ViewChannel]!=]
$if[$addChannelPerms[$findChannel[ticket-$getVar[Tickets;$guildID]];$authorID;ViewChannel]!=]
$ephemeral 
Your ticket has been created: <#$findChannel[ticket-$getVar[Tickets;$guildID]]>]
$if[$customID==Close;
$author[Portal Tickets;$userAvatar[$botID]]
$description[Are you sure to close this ticket?]
$footer[Executed by $username;$guildIcon]
$addActionRow
$addButton[Yes;Yes;Success;✅]]
$if[$customID==Yes;$if[$removeChannelPerms[$channelID;$getVar[tktOwner;$channelID];ViewChannel]!=]
$setChannelName[$channelID;closed-$getVar[tktNo;$channelID]]
$if[$editMessage[$channelID;$messageID;$author[Portal Tickets;$userAvatar[$botID]] 
$description[**$username** closed this ticket] $footer[Executed by $username;$guildIcon]
$addActionRow
$addButton[Delete;Delete;Danger;🚮]
$addButton[Open;Open;Success;🔓]]!=]]
$if[$customID==Delete;$if[$deleteChannels[$channelID]!=]]
$if[$customID==Setup;$modal[Ticket1;Setup Ticket Panel]
$addTextInput[Ticket1;Channel ID
Required: Yes;Short;true;The Channel ID where to send ticket panel;;19;19]
$addTextInput[Ticket2;Panel Message
Required: no;Paragraph;false;Message to send with panel;Click on ***🎫*** button to create a ticket;1;4000]
$addTextInput[Ticket3;Category ID
Required: yes;Short;true;Category ID where to create tickets;;19;19]]
$if[$customID==Open;$if[$addChannelPerms[$channelID;$getVar[tktOwner;$channelID];ViewChannel]!=]
$if[$editMessage[$channelID;$messageID;$author[PortalTickets;$userAvatar[$botID]]
$description[Successfully reopened the ticket]
$footer[Executed by $username | $parseDate[$getTimestamp;LocaleTime];$guildIcon]]!=;]]
$if[$customID==Ticket1;$onlyIf[$channelExists[$input[Ticket1]]==true;> **Error 404: Channel does not exists**]
$onlyIf[$channelExists[$input[Ticket3]]==true;> **Error 404: Category does not exists**]
$setVar[Ticket1;$guildID;$input[Ticket1]]
$setVar[Ticket2;$guildID;$input[Ticket2]]
$setVar[Ticket3;$guildID;$input[Ticket3]]
$sendMessage[$getVar[Ticket1;$guildID];$color[c30010]
$author[Portal Tickets;$userAvatar[$botID]]
$title[Create ticket] $description[$getVar[Ticket2;$guildID]]
$footer[tickets of $guildName[$guildID];$guildIcon]
$addActionRow
$addButton[Ticket;Ticket;Secondary;🎫]]]
`
}