
var shop = [
  {
      title: 'Dog Sweater',
      image: './assets/img/clothes2.jpg',
      price: '19.99',
      description: "<br> Blue dog dress"
    },
  {
      title: 'Dog Hoodie',
      image: './assets/img/hoodie.jpg',
      price: '16.99',
      description: "<br>Grey dog hoodie, great for a chilly walk or a cozy night in"
    },
    {
      title: 'Lounge Couch',
      image: './assets/img/dogCouch.jpg',
      price: '145.00',
      description: "<br> It's time for your fur baby to sleep in style. Made from washable waterproof velvet our pet bed collection doubles as stylish statement pieces that complement your impeccably glamorous taste.."
    },
    {
      title: 'Luxury Stroller',
      image: './assets/img/OxGord-Paws-Pals-3-Wheeler-Elite-Jogger-Pet-Stroller-1024x1024.jpg',
      price: '59.99',
      description: "<br> This will have your pup looking like the coolest thing rolling into town. Comformatable and breathable padding on the inside and it is washable. Has a screen to protect your pup from the sun and bugs. "
    },

    {
      title: 'Louis Pawton',
      image: './assets/img/Louis.jpg',
      price: '49.99',
      description: "<br><br><br><br><br><br><br> Louis Pawton Furry Brown Jacket"
    },
    {
      title: 'Rose Gold Dog Collar',
      image: './assets/img/rosegold.jpg',
      price: '65.99',
      description: "<br> <br> <br> <br> <br> Luxury isn't only for humans. Made with stainless steel and plated with 18k gold, this chain collar is made to last and will fetch compliments everywhere you go."
    },

    {
      title: 'Louis Pawton Leash',
      image: './assets/img/lpl.jpg',
      price: '79.99',
      description: "<br> <br> <br> <br> <br>Walk your fur-baby in style!"
    },

    {
      title: 'Gold Collar',
      image: './assets/img/gold.jpg',
      price: '58.99',
      description: "<br> <br><br>Luxury isn't only for humans. Made with stainless steel and plated with 18k gold, this chain collar is made to last and will fetch compliments everywhere you go."
    },
    {
      title: 'Travel Carrier',
      image: './assets/img/bag1.jpg',
      price: '125.00',
      description: "<br>Travel together with this super comfortable, modular Travel Carrier. With breathable mesh walls, a dual use leash / shoulder strap, and an interior cushion that folds out to become a comfortable dog bed, our airline compliant carrier is the home away from home your dog deserves. "
    }, 
  
  
    ];
    var postHTML = ""
    for (var i=0; i < shop.length; i++){
  
    var container = '<div class="container col-lg-4">'
    var heading = '<div class=" mb-1 text-center"><div class="card mb-4 shadow-sm" style="border: 2px solid  rgb(234, 186, 75);" font-family: "Sedgwick Ave Display, cursive;"> ' + '<div class="card-header"><h4 class="my-0 fw-normal '+ '"> ' + shop[i].title + '</h4></div>';
  
    var price = '<div class="card-body"><h1 class="card-title pricing-card-title' + '">$' + shop[i].price + '</h1>';
    var image = '<ul class="list-unstyled mt-3 mb-4 ' + '"> <ul class="list-unstyled mt-3 mb-4"> <img src="' + shop[i].image + '"style="" alt="Product">';
  
    var description = '<li> ' + shop[i].description + '</li></ul><button type="button" class="w-80 btn btn-lg btn-outline-dark">Add to cart</button></div></div></div></div></div>'         
    var concatThis = container + heading + image + price + description;
        postHTML = postHTML + concatThis            
    }
    document.getElementById('market').innerHTML = postHTML   



    