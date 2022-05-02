// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", addEvent) ;

var matchArr = JSON.parse(localStorage.getItem("schedule")) || [] ;

function addEvent(){
    var matchObj = {
        matchNumber : masaiForm.matchNum.value ,
        teamA : masaiForm.teamA.value ,
        teamB : masaiForm.teamB.value ,
        matchDate : masaiForm.date.value ,
        matchVenue : masaiForm.venue.value ,
    } ;
    matchArr.push(matchObj) ;
    localStorage.setItem("schedule", JSON.stringify(matchArr)) ;
}