// write js code here corresponding to matches.html

var matchDetail = JSON.parse(localStorage.getItem("schedule")) ;

function displayData(data){
    document.querySelector("tbody").innerHTML = "" ;
    data.forEach(function(elem){
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerText = elem.matchNumber ;

        const td2 = document.createElement('td');
        td2.innerText = elem.teamA ;

        const td3 = document.createElement('td');
        td3.innerText = elem.teamB ;

        const td4 = document.createElement('td');
        td4.innerText = elem.matchDate ;

        const td5 = document.createElement('td');
        td5.innerText = elem.matchVenue ;

        const td6 = document.createElement('td');
        td6.innerText = "Favourits" ;
        td6.style.color = "green" ;
        td6.style.cursor = "pointer" ;
        td6.addEventListener("click",function(){
            addFavourits(elem) ;
        })

        tr.append(td1,td2,td3,td4,td5,td6) ;
        document.querySelector("tbody").append(tr) ;
    })

    var favouritsArr = JSON.parse(localStorage.getItem("favourites")) || [] ;

    function addFavourits(elem){
        favouritsArr.push(elem) ;
        localStorage.setItem("favourites", JSON.stringify(favouritsArr)) ;
    }
}

displayData(matchDetail) ;
