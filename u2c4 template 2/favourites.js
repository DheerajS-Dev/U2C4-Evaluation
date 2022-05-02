// write js code here corresponding to favourites.html

var favour = JSON.parse(localStorage.getItem("favourites")) ;

displaysData(favour) ;

function displaysData (data){
    data.forEach(function(elem,index){
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
        td6.innerText = "Remove" ;
        td6.style.color = "red" ;
        td6.style.cursor = "pointer" ;
        td6.addEventListener("click",function(){
            removeFun(elem,index) ;
        })

        tr.append(td1,td2,td3,td4,td5,td6) ;
        document.querySelector("tbody").append(tr) ;
    })

    function removeFun(elem,index){
        favour.splice(index,1) ;
        localStorage.setItem("favourites",JSON.stringify(favour)) ;
        window.location.reload() ;        
    }
}