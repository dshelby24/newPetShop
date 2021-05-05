
var shop = [
    {
        title: 'Spence',
        image: './img/pexels-photo-1420405.jpg',
        price: '',
        description: "Yorkie"
      },
    {
        title: 'Coop',
        image: './img/bulldog.jpg',
        price: '16.79',
        description: "French Bulldog"
      },
      {
        title: 'Casper',
        image: './img/little-maltese-puppy-with-blue-bow-tie-780x681.jpg',
        price: '16.79',
        description: "Maltese"
      },
      {
        title: 'Twirl',
        image: './pomeranian.jpg',
        price: '16.79',
        description: "Pomeranian"
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