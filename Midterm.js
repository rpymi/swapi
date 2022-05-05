const starWarDetails = document.querySelector('.detail');

// //getting ship's name
// function starShips(shipList){
//     var shipName = [];

//     for (i of shipList) {
//         fetch(i)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (json) {
//                 let ship = json.results;

//                 filmName.push(ship.title);
//             });
//     }
//     return shipName;
// }

fetch('https://swapi.dev/api/films/')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let film = json.results;

        //get the detail of each film
        function films(i){
            let item1 = document.createElement('li');
            item1.innerHTML = '<div id="rem">' + film[i].title + '</div>';

            let item2 = document.createElement('li');
            item2.innerHTML = '<div id="rem">' + film[i].episode_id + '</div>';

            let item3 = document.createElement('li');
            item3.innerHTML = '<div id="rem">' + film[i].release_date + '</div>';

         
            // let btn = document.createElement("button");
            // btn.innerHTML = "Star Ships";
            // document.body.appendChild(btn);
            //     let shipp= document.createElement('li')
            //     shipp.innerHTML='<div id="rem">' + film[i].starships + '</div>';
            
            
            starWarDetails.appendChild(item1);
            starWarDetails.appendChild(item2);
            starWarDetails.appendChild(item3);
            
        }

        //for buttons :(
        document.getElementById("1").onclick = t1;
        function t1(){
            //clear right side before show new detail
            while(starWarDetails.firstChild){
                starWarDetails.removeChild(starWarDetails.firstChild);
            }
            document.getElementById("name").innerHTML = document.getElementById("1").name;
            films(0)
        }
        document.getElementById("2").onclick = t2;
        function t2(){
            while(starWarDetails.firstChild){
                starWarDetails.removeChild(starWarDetails.firstChild);
            }
            document.getElementById("name").innerHTML = document.getElementById("2").name;
            films(1)
        }
        document.getElementById("3").onclick = t3;
        function t3(){
            while(starWarDetails.firstChild){
                starWarDetails.removeChild(starWarDetails.firstChild);
            }
            document.getElementById("name").innerHTML = document.getElementById("3").name;
            films(2)
        }
        document.getElementById("4").onclick = t4;
        function t4(){
            while(starWarDetails.firstChild){
                starWarDetails.removeChild(starWarDetails.firstChild);
            }
            document.getElementById("name").innerHTML = document.getElementById("4").name;
            films(3)
        }
        document.getElementById("5").onclick = t5;
        function t5(){
            while(starWarDetails.firstChild){
                starWarDetails.removeChild(starWarDetails.firstChild);
            }
            document.getElementById("name").innerHTML = document.getElementById("5").name;
            films(4)
        }
        document.getElementById("6").onclick = t6;
        function t6(){
            while(starWarDetails.firstChild){
                starWarDetails.removeChild(starWarDetails.firstChild);
            }
            document.getElementById("name").innerHTML = document.getElementById("6").name;
            films(5)
        }
      
       
    });
