const initiatePromise = async function(){
    var response = await fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random");
    var data = await response.json();
    displayPicture(data);
    //console.log(data);
}

initiatePromise();

function displayPicture(data){
        let h1 = document.createElement("h1");
        h1.innerText=data.character.name;
        let h2 = document.createElement("h1");
        h2.innerText = data.sentence;
        let div = document.getElementsByClassName("row");
        div[0].append(h1,h2);
}