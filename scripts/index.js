// Add the coffee to local storage with key "coffee"
let total = document.getElementById("coffee_count");


async function getData() {
    try {

    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

    let res = await fetch(url);

    let val = await res.json();

    append(val.menu.data);

    }
    catch(err) {
        alert(err);
    }
}
getData();

let all_coffee = JSON.parse(localStorage.getItem("coffee")) || [];

function append(data) {

    document.getElementById("menu").innerHTML = null;

    data.map(function(elem) {

        // Box
        let box = document.createElement("div");
        box.setAttribute("class","coffee");

        // Image
        let image = document.createElement("img");
        image.src = elem.image;

        // Type
        let type = document.createElement("p");
        type.innerText = elem.title;

        // Price
        let price = document.createElement("p");
        price.innerText = elem.price;

        // Button
        let btn = document.createElement("button");
        btn.innerText = "Add To Bucket";
        btn.setAttribute("id","add_to_bucket");

        // Appending
        box.append(image,type,price,btn);
        document.getElementById("menu").append(box);

        btn.addEventListener("click", function() {
            bucket(elem);
        })
    })
}
// Adding to the Local Storage
function bucket(elem) {
    all_coffee.push(elem);
    localStorage.setItem("coffee",JSON.stringify(all_coffee));

    total.innerHTML = "";
    total.innerText = JSON.parse(localStorage.getItem("coffee")).length;
    // document.getElementById("coffee_count").innerHTML = "";
    // document.getElementById("coffee_count").innerText = JSON.parse(localStorage.getItem("coffee")).length;
}