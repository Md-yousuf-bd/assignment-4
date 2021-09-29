//convert to seerToMon
function SeerToMon(seer){
      const oneMon = 40;
      var Mon = seer/oneMon;
      return Mon;
}
var seer = 20;
const mon = SeerToMon(seer);
console.log(mon);

