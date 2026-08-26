//function looping() {
 // var start = +prompt("enter start number");
  //var end = +prompt("entaer end number");
 //var contNum = +prompt("enter contiue number")
 // var breakNum= +prompt("enter break number")
  //for (var i = start; i <= end; i++) {
    //if (i === breakNum) {
    // console.log(i);
   //   break; 
   // }
  //  if (i === contNum) {
   //   continue; 
 //   }
  //  console.log(i);
 // }
//}
//looping();


let tracks = ["web design", "network", "ux"];
let formattedTracks = tracks.map((track) => `Track: ${track}`);
console.log(formattedTracks);
let input = prompt("Enter track ")
let check = tracks.find((item)=> item == input)
if(!check)
tracks.push(input)



