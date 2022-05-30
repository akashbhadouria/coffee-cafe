// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucket_items = JSON.parse(localStorage.getItem("coffee")) || [];

let total = 0;

// Calculating Total
bucket_items.map(function(elem) {
    total += Number(elem.price);
    document.getElementById("total_amount").innerText = total;
});

function appendCoffees(bucket_items) {
    bucket_items.map(function(elem,idx) {

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
         btn.innerText = "Remove";
         btn.setAttribute("id","remove_coffee");
 
         // Appending
         box.append(image,type,price,btn);
         document.getElementById("bucket").append(box);
 
         btn.addEventListener("click", function() {
             remove(elem,idx);
         })
    })
}

appendCoffees(bucket_items);

// Remove
function remove(elem,idx) {
    bucket_items.splice(idx,1);
    localStorage.setItem("coffee",JSON.stringify(bucket_items));
    window.location.reload();
}
