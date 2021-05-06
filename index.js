
var shop = [
    {
        title: 'Spence (Yorkie)',
        image: './img/pexels-photo-1420405.jpg',
        price: '1,000',
        description: "8 week old yorkie. Has all shots. "
      },
    {
        title: 'Coop (French Bulldog)',
        image: './img/bulldog.jpg',
        price: '16.79',
        description: ""
      },
      {
        title: 'Casper(Maltese)',
        image: './img/little-maltese-puppy-with-blue-bow-tie-780x681.jpg',
        price: '16.79',
        description: "6 Month Old  pup ready to go home with you today. Up to date on shots, potty trained"
      },
      {
        title: 'Twirl(Cavapoo)',
        image: './img/Cavapoo.jpg',
        price: '16.79',
        description: "9 weeks"
      },
    
      ];
      var postHTML = ""
      for (var i=0; i < shop.length; i++){
    
      var container = '<div class="container col-md-3">' 
      var heading = '<div class=" mb-3 text-center"><div class="card mb-4 shadow-sm" style="border: 2px solid  rgb(234, 186, 75);"> ' + '<div class="card-header"><h4 class="my-0 fw-normal '+ '"> ' + shop[i].title + '</h4></div>';
    
      var price = '<div class="card-body"><h1 class="card-title pricing-card-title' + '">$' + shop[i].price + '</h1>';
      var image = '<ul class="list-unstyled mt-3 mb-4 ' + '"> <ul class="list-unstyled mt-3 mb-4"> <img src="' + shop[i].image + '"style="" alt="Product">';
    
      var description = '<li> ' + shop[i].description + '</li></ul><button type="button" class="w-80 btn btn-lg btn-outline-dark">Add to cart</button></div></div></div></div></div>'         
      var concatThis = container + heading + image + price + description;
          postHTML = postHTML + concatThis            
      }
      document.getElementById('market').innerHTML = postHTML   