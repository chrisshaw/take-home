//load json file using jquery
$.getJSON('response-data.json', function (json) {
let data = [];
//store json elements into an array in js
for (let i in json) {
    if (json.hasOwnProperty(i)) {
        var item = json[i]; //set an item for json element
        data.push({ //store data into data array
            //get each requirement's data
            socialStudies: item.socialStudies,
            math: item.math,
            science: item.science,
            english: item.english,
            pe: item.pe,
            health: item.health,
            electives: item.electives
        });
    }
}

//if there are 0 credits, remove display
if (data[0].socialStudies == 0){
  let c = document.getElementById("sscredit-container");
  c.style.display = "none";
}
else{
  let credits = document.getElementsByClassName("sscredit-box");
  //turn displays of non-awarded credits to off
  //use 12 because of max amount of credits
  for (let i = data[0].socialStudies; i < 12; i++){
    c = credits.item(i);
    c.style.display = "none";
  }

}

});
