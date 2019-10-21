

$(document).ready(function() {
  /* ^this puts everything in a function that runs once the page has fully loaded.*/
  var cartTotal = localStorage.getItem("cartTotal"); //get the # of things in the cart from storage
  $(".cart sup").text(cartTotal); //change the text in the cart link to be the # we got from storage



  $(".details a").click(function() {//set the click event on the 'view details' links
    /* ^all <a> tags that are children of an element with a class of 'details' will now fire this function on being clicked.*/
    var product = $(this).parent().parent().find("p").html();
    /*^ now the variable 'product' has the value of that p tag's text from the HTML */
    localStorage.setItem("product", product);
    /* ^save it in local storage as 'product' - we will retrieve it later by using this name.*/
  });

  if ($("body").hasClass("detailsPage")) {
    /*^this is an easy way to check if we are on the details page or not, since the script runs on every page.*/
    var productName = localStorage.getItem("product");
    /*^ get the bun name we stored earlier and set it as a new variable*/
    var price;
    var description;
    /* ^we will need these two values in a minute */
    $(".name").text(productName);
    /* ^this sets the text in the sidebar to the name of the bun we picked on the last page

    go through all six buns and sets the price
    and description variables above to be different values, depending on the bun name from
    local storage*/
    if (productName == "Walnut") {
      price = "$3.50";
      description =
        "One of our year-round favorites, the walnut bun does not disappoint. Freshly crushed walnuts bring out the subtle flavors of cinnamon. These buns can be delivered.";
    }
    if (productName == "Gluten Free") {
      price = "$3.75";
      description =
        "One of our year-round favorites, the gluten free bun does not disappoint. Freshly crushed gluten brings out the subtle flavors of cinnamon. These buns can be delivered.";
    }
    if (productName == "Original") {
      price = "$3.00";
      description =
        "One of our year-round favorites, the original bun does not disappoint.";
    }
    if (productName == "Pumpkin Spice") {
      price = "$3.75";
      description =
        "One of our year-round favorites, the pumpkin spice bun does not disappoint. Freshly crushed pumpkin spice brings out the subtle flavors of cinnamon. These buns can be delivered.";
    }
    if (productName == "Blackberry") {
      price = "$3.50";
      description =
        "One of our year-round favorites, the blackberry bun does not disappoint. Freshly crushed blackberries bring out the subtle flavors of cinnamon. These buns can be delivered.";
    }
    if (productName == "Caramel Pecan") {
      price = "$3.75";
      description =
        "One of our year-round favorites, the caramel pecan bun does not disappoint. Freshly crushed pecans bring out the subtle flavors of cinnamon. These buns can be delivered.";
    }
    $(".description").text(description);
    $(".price").text(price);
    /*^ now that we have set values for the price and description variables through our if statements, we can set the text of
    those two paragraphs to be the value of the variables */
    }

  $("button").click(function() {
    /* event binding on the 'add to cart' button -another anonymous function */
    cartTotal = cartTotal+1;
    //increase the number of items in the cart by one
    $(".cart sup").text(cartTotal);
    //update that value in the HTML of the 'cart' link
    localStorage.setItem("cartTotal", cartTotal);
    //update the value in local storage so it will be correct even if user goes to another page
  });
});
