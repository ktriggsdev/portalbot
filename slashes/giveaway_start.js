module.exports = {
  data: {
    name: "gstart",
    description: "start a giveaway",
    type: 1,
  },
  code: `
    $color[c30010]
    $footer[$guildName;$guildIcon]
    $onlyIf[
      $or[
        $hasPerms[$guildID;$authorID;ManageChannels]==true;
        $authorID==$botOwnerID
      ]==true;
      $description[**You don't have \`ManageChannels\` permission]
      $author[$username;$userAvatar]
    ]
    $color[c30010]
    $footer[$guildName;$guildIcon]
    $let[winnerCount;$replace[$toLowerCase[$message[1]];w;]]
    $onlyIf[
      $and[
        $parseString[$message[0]]!=0;
        $isNumber[$get[winnerCount]]==true;
        $message[1]!=
      ]==true;
      $author[$username;$userAvatar]
    ]
    $description[**$username]
    Wrong usage of command!
    \`\`\`Correct usage - !gstart <duration> <winners> <prize>\`\`\`
  ` // <-- Backticks closed here
};