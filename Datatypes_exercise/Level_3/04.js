let text = "He earns 5000 euros from salary per month, 10000 euro annual bonus, 15000 euro online course per month."
let total = (Number(text.match("5000")) *12) + (+text.match("10000")) + ((+text.match("15000")) * 12)
console.log(total)