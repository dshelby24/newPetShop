var shop =[
    {
      title: 'Spence (Yorkie)',
      image: './assets/img/pexels-photo-1420405.jpg',
      price: 'inquire today',
      description: " <br> 8 weeks old. Spence loves skateboards he sleeps on one everynight. #CoolPup *Up to date on shots*"
    },
    
    {
      title: 'Casper(Maltese)',
      image: './assets/img/little-maltese-puppy-with-blue-bow-tie-780x681.jpg',
      price: 'inquire today',
      description: "6 Month old pup. He still has to get used to the dog life so be patient with him"
    },
    {
      title: 'Twirl(Cavapoo)',
      image: './assets/img/Cavapoo.jpg',
      price: 'inquire today',
      description: "9 weeks loves his blanket and loves to cuddle. Up to date on shots."
    },
    
    ]



var postHTML = ""
for (var i=0; i < shop.length; i++){

var container = '<div class="container col-lg-4">'
var heading = '<div class=" mb-1 text-center"><div class="card mb-4 shadow-sm" style="border: 2px solid  rgb(234, 186, 75);"> ' + '<div class="card-header"><h4 class="my-0 fw-normal '+ '"> ' + shop[i].title + '</h4></div>';

var price = '<div class="card-body"><h1 class="card-title pricing-card-title' + '">$' + shop[i].price + '</h1>';
var image = '<ul class="list-unstyled mt-3 mb-4 ' + '"> <ul class="list-unstyled mt-3 mb-4"> <img src="' + shop[i].image + '"style="" alt="Product">';

var description = '<li> ' + shop[i].description + '</li></ul><button type="button" class="w-80 btn btn-lg btn-outline-dark">Add to cart</button></div></div></div></div></div>'         
var concatThis = container + heading + image + price + description;
    postHTML = postHTML + concatThis            
}
document.getElementById('sale').innerHTML = postHTML   
