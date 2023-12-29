module.exports = {
type: "interactionCreate",
code: "$if[$customID==reminder-modal;$let[sectr;$isNumber[$input[reminder-seconds]]]  $let[mintr;$isNumber[$input[reminder-minutes]]] $let[hourtr;$isNumber[$input[reminder-hours]]] $let[daytr;$isNumber[$input[reminder-days]]] $if[$and[$get[sectr]==true;$get[mintr]==true;$get[hourtr]==true;$get[daytr]==true];$title[ KieranTheDev] $description[I've set your reminder I'll remind you in $if[$input[reminder-days]!=;$input[reminder-days]Days,] $if[$input[reminder-hours]!=;$input[reminder-hours]Hours,] $if[$input[reminder-minutes]!=;$input[reminder-minutes]Minutes and ]$input[reminder-seconds]Seconds] $color[#3498db]]]"
}
