
var shop = [
  {
      title: 'Dog Sweater',
      image: './img/clothes2.jpg',
      price: '19.99',
      description: "Purina Pro Plan Adult Sensitive Skin & Stomach Salmon & Rice Formula Dry Dog Food"
    },
  {
      title: 'Dog Hoodie',
      image: './img/hoodie.jpg',
      price: '16.79',
      description: "<br>Fancy Feast Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food"
    },
    {
      title: 'Lounge Couch',
      image: './img/dogcouch.jpg',
      price: '16.79',
      description: "<br>Fancy Feast Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food"
    },
    {
      title: 'Luxury Stroller',
      image: './img/OxGord-Paws-Pals-3-Wheeler-Elite-Jogger-Pet-Stroller-1024x1024.jpg',
      price: '16.79',
      description: "<br>Fancy Feast Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food"
    },

    {
      title: 'Food Dispenser',
      image: './img/fooddisp.jpg',
      price: '16.79',
      description: "<br>Fancy Feast Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food"
    },
    {
      title: 'Rose Gold Dog Chain',
      image: './img/rosegold.jpg',
      price: '16.79',
      description: "<br>Fancy Feast Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food"
    },

    {
      title: 'Treats and Dog Camera',
      image: './img/dogcamera.jpg',
      price: '16.79',
      description: "<br>Want to check in on your pet while away? This camera "
    },

    {
      title: 'Gold Collar',
      image: './img/gold.jpg',
      price: '16.79',
      description: "<br>Fancy Feast Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food"
    },
    {
      title: 'Travel Carrier',
      image: './img/bag1.jpg',
      price: '16.79',
      description: "<br>Fancy Feast Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food"
    }, {
      title: 'Spence (Yorkie)',
      image: './img/pexels-photo-1420405.jpg',
      price: '1,000',
      description: "8 week old yorkie. Has all shots. "
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
  
    var container = '<div class="container col-lg-4">'
    var heading = '<div class=" mb-1 text-center"><div class="card mb-4 shadow-sm" style="border: 2px solid  rgb(234, 186, 75);"> ' + '<div class="card-header"><h4 class="my-0 fw-normal '+ '"> ' + shop[i].title + '</h4></div>';
  
    var price = '<div class="card-body"><h1 class="card-title pricing-card-title' + '">$' + shop[i].price + '</h1>';
    var image = '<ul class="list-unstyled mt-3 mb-4 ' + '"> <ul class="list-unstyled mt-3 mb-4"> <img src="' + shop[i].image + '"style="" alt="Product">';
  
    var description = '<li> ' + shop[i].description + '</li></ul><button type="button" class="w-80 btn btn-lg btn-outline-dark">Add to cart</button></div></div></div></div></div>'         
    var concatThis = container + heading + image + price + description;
        postHTML = postHTML + concatThis            
    }
    document.getElementById('market').innerHTML = postHTML   


    

    