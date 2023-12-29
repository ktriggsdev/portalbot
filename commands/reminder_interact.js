module.exports = {
type: "interactionCreate",
code: `$if[$customID==reminder-menu;$modal[reminder-modal;SetUp Reminder] $addTextInput[reminder-msg;Reminder Message;Paragraph;true;Reminder Message;;;] $addTextInput[reminder-seconds;Seconds;Short;true;For example: 60;;1;2] $addTextInput[reminder-minutes;Minutes;Short;false;For example: 60;0;1;2] $addTextInput[reminder-hours;Hours;Short;false;For example: 2;0;1;2] $addTextInput[reminder-days;Days;Short;false;For example: 1;0;1;2]]`
}