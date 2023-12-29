module.exports = ({
    name: "update",
    aliases: ["reload", "updatecommands"],
    type: "messageCreate",
    code: `
        $onlyForUsers[;...UserIDs]

        $let[count;$commandCount]
        $updateCommands
        $let[add;$sub[$commandCount;$get[count]]]

        $color[ff47ff]
        $description[Successfully update all commands.]

        $addActionRow
        $addButton[1;Added: $get[add];Success;✔️]
        $addButton[2;Total: $commandCount;Secondary;📃]
`})