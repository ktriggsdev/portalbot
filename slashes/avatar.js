module.exports = {
    data: {
        name: "avatar",
        description: "Grab the avatar of the user mentioned",
        options: [
            {
                // Use a valid option name here
                "type": 6,
                "name": "user", // Or "targetUser", etc.
                "description": "Select the User to grab the avatar",
                "required": false
            }
        ]
    },

    code: `
    $title[Avatar Successfully Grabbed]

$if[$option[user]==;$let[ID;$authorID];$let[ID;$option[user]]]    $description[
- **Mention:** <@$option[user]>
- **Avatar:** [Download\\]($userAvatar[$get[ID]])
$image[$userAvatar[$get[ID]]]
]
$color[#7134eb]
$footer[Requested by $username]
  $reply`
};