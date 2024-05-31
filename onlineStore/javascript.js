var attempt = 0;

function login() {
    var email = document.getElementById("user").value;
    var password = document.getElementById("pas").value;

    if (email === "pau" && password === "1031") {
        window.location.href = "homepg.html";
        return true;
    } else {
        attempt++;
        if (attempt >= 2) {
            document.getElementById("btnLogIn").disabled = true;
            document.getElementById("user").disabled = true;
            document.getElementById("pas").disabled = true;
            document.getElementById("user").value = "";
            document.getElementById("pas").value = "";
            return false;
        } else {
            alert("Invalid email or password. Attempt " + attempt + " of 2.");
        }
    }
}




/**-- Add to Cart Form --*/

function toggle_popup() {
    document.getElementById("product_cart").classList.toggle("active");
}

function toggle_remove() {
    var popup = document.getElementById("product_cart");
    popup.classList.remove("active");
}

/**-- End --*/


/**-- Shopping Cart Form --*/

function popup_cart() {
    document.getElementById("shopping_cart").classList.toggle("active");
}

function remove_cart() {
    var popup = document.getElementById("shopping_cart");
    popup.classList.remove("active");

}
/**-- End --*/


/**-- Place Order Form --*/

function go_to_next() {
    var item_list = document.getElementById('item_list');
    var row_count = item_list.rows.length;

    if (row_count == 0) {
        alert("Your shopping cart is empty. Please add items before proceeding to check out.");
    } else {
        document.getElementById("place_order").classList.toggle("active");
        remove_cart();
    }
}

function back_to_cart() {
    var popup = document.getElementById("place_order");
    popup.classList.remove("active");
    
    popup_cart();
}

/**-- End --*/

function buy_now() {
    toggle_remove();
    display_place_order(); 
}

function display_place_order() {
    document.getElementById("place_order").classList.toggle("active");
}



/**-- Display Successfully Ordered Form --*/

function display_success() {
    var full_name = document.getElementById("full_name").value;
    var mobile_num = document.getElementById("mobile_num").value;
    var address = document.getElementById("address").value;

    var pay_method = document.getElementById("pay_method").value;
    var name_on_card = document.getElementById("name_on_card").value;
    var card_num = document.getElementById("card_num").value;

    if (full_name.trim() == "" || mobile_num.trim() == "" || address.trim() == "") {
        alert("Please fill in all the required fields.");
    } else if (pay_method == "Card" && (name_on_card.trim() == "" || card_num.trim() == "")) {
        alert("Please provide valid card details.");
    }  else {
        document.getElementById("display_success").classList.toggle("active");

        var popup = document.getElementById("place_order");
        popup.classList.remove("active");
    }
}

function successfully_ordered() {
    var popup = document.getElementById("display_success");
    popup.classList.remove("active");

    location.reload();
}

/**-- End --*/











var sunflower = {
    image: "byPieceproducts/reduced/sunflowerr.jpg",
    name:"sunflower",
    description: "Brighten any space with the vibrant charm of our single-stemmed sunflower, radiating warmth and joy.",
    price: 77.00,
    shop_voucher: "No available voucher.",
    color: "Yellow",
    inclusions: "1 piece sunflower",
    href: "sunflower",
    bundle: false
};

var tulip = {
    image: "byPieceproducts/reduced/tulipp.jpg",
    name:"Tulip",
    description: "Add a touch of elegance to your surroundings with our exquisite one-piece tulip, embodying grace and beauty in simplicity.",
    price: 50.00,
    shop_voucher: "No available voucher.",
    color: "Peach",
    inclusions: "1 piece tulip",
    href: "tulip",
    bundle: false
};

var rosee = {
    image: "byPieceproducts/reduced/rosee.jpg",
    name: "Rose",
    description: "Elevate your décor with the timeless allure of our single stem rose, a symbol of love and sophistication.",
    price: 66.00,
    shop_voucher: "No available voucher.",
    color: "Red",
    inclusions: "1 piece Rose",
    href: "rose",
    bundle: false
};



var daisy = {
    image: "byPieceproducts/reduced/daisyy.jpg",
    name:"3 pcs. Daisy",
    description: "Embrace the simple pleasures of nature with our single daisy, exuding purity and cheerfulness wherever it blooms.",
    price: 56.00,
    shop_voucher: "No available voucher.",
    color: "White",
    inclusions: "3 pieces Daisies",
    href: "daisy",
    bundle: false
};

var waterlily = {
    image: "byPieceproducts/reduced/waterlilyy.jpg",
    name:"1 pc. Waterlily",
    description: "Bring tranquility to your home with our single waterlily, floating delicately to inspire calm and serenity.",
    price: 80.00,
    shop_voucher: "No available voucher.",
    color: "White",
    inclusions: "1 piece Waterlily",
    href: "waterlily",
    bundle: false
};

var forgetmenot = {
    image: "byPieceproducts/reduced/forgetmenot.jpg",
    name:"1 stem Forget-me-not",
    description: "Cherish memories and connections with our delicate one-piece forget-me-not, symbolizing enduring love and remembrance.",
    price: 49.00,
    shop_voucher: "No available voucher.",
    color: "White",
    inclusions: "1 stem Forget-me-not with 3 pieces of flowers in it. ",
    href: "forgetmenot",
    bundle: false
};

var lavender = {
    image: "byPieceproducts/reduced/lavenderr.jpg",
    name:"Lavender",
    description: "Infuse your space with the soothing fragrance of our one-piece lavender, bringing relaxation and harmony to your surroundings.",
    price: 60.00,
    shop_voucher: "No available voucher.",
    color: "Lavender",
    inclusions: "2 stem Lavender ",
    href: "lavender",
    bundle: false
};

var bqtsunflower = {
    image: "bouquet/reduced/bqtsunflower.jpg",
    name:"Sunflower Bouquet",
    description: "Brighten any space with this charming crocheted sunflower bouquet, radiating warmth and cheer.",
    price: 130.00,
    bundle3_price: 130.00,
    bundle6_price: 260.00,
    bundle9_price: 290.00,
    bundle12_price: 440.00,
    shop_voucher: "No available voucher",
    color: "Yellow",
    inclusions: "chosen bundle",
    href: "bqtsunflower",
    bundle: true 
};

var bqttulip = {
    image: "bouquet/reduced/bqttulip.jpg",
    name:"Tulip Bouquet",
    description: "Delicate and elegant, this tulip bouquet adds a touch of spring beauty to any decor.",
    price: 110.00,
    bundle3_price: 110.00,
    bundle6_price: 240.00,
    bundle9_price: 330.00,
    bundle12_price: 370.00,
    shop_voucher: "No available voucher",
    color: "Pink",
    inclusions: "chosen bundle",
    href: "bqttulip",
    bundle: true 
};

var bqtrose = {
    image: "bouquet/reduced/bqtrose.jpg",
    name:"Rose Bouquet",
    description: "A timeless symbol of love, these hand-crocheted roses make for a perfect romantic gesture.",
    price: 120.00,
    price: 120.00,
    bundle3_price: 120.00,
    bundle6_price: 210.00,
    bundle9_price: 310.00,
    bundle12_price: 410.00,
    shop_voucher: "No available voucher",
    color: "Red",
    inclusions: "chosen bundle",
    href: "bqtrose",
    bundle: true 
};

var bqtdaisy = {
    image: "bouquet/reduced/bqtdaisy.jpg",
    name:"Daisy Bouquet",
    description: "Cheerful and fresh, this daisy bouquet brings a delightful burst of happiness to your home.",
    price: 100.00,
    bundle3_price: 100.00,
    bundle6_price: 200.00,
    bundle9_price: 270.00,
    bundle12_price: 340.00,
    shop_voucher: "No available voucher",
    color: "White",
    inclusions: "chosen bundle",
    href: "bqtdaisy",
    bundle: true 
};

var bqtwaterlily = {
    image: "bouquet/reduced/bqtwaterlily.jpg",
    name:"Waterlily Bouquet",
    description: "Graceful and serene, this waterlily bouquet captures the essence of tranquil waters.",
    price: 140.00,
    bundle3_price: 140.00,
    bundle6_price: 200.00,
    bundle9_price: 280.00,
    bundle12_price: 490.00,
    shop_voucher: "No available voucher",
    color: "White",
    inclusions: "chosen bundle",
    href: "bqtwaterlily",
    bundle: true 
};

var bqtlavender = {
    image: "bouquet/reduced/bqtlavender.jpg",
    name:"Lavender Bouquet",
    description: "Soft and soothing, this lavender bouquet offers a calming touch to any setting.",
    price: 100.00,
    bundle3_price: 100.00,
    bundle6_price: 200.00,
    bundle9_price: 280.00,
    bundle12_price: 340.00,
    shop_voucher: "No available voucher",
    color: "Lavender",
    inclusions: "chosen bundle",
    href: "bqtlavender",
    bundle: true 
};

var bundle1 = {
    image: "specialbundles/reduced/bundle1.jpg",
    name:"Aphrodite's Pick",
    description: "A divine selection of flowers, inspired by the goddess of love and beauty.",
    price: 300.00,
    shop_voucher: "No available voucher",
    color: "random",
    inclusions: "Roses, Tulips, Daisies, Forget-me-not",
    href: "bundle1"
};

var bundle2 = {
    image: "specialbundles/reduced/bundle2.jpg",
    name:"Blue Series",
    description: "A cool and calming collection of crocheted flowers in various shades of blue.",
    price: 280.00,
    shop_voucher: "No available voucher",
    color: "Blue",
    inclusions: "Tulips and daisies",
    href: "bundle2"
};

var bundle3 = {
    image: "specialbundles/reduced/bundle3.jpg",
    name:"Pink Series",
    description: "Sweet and playful, this series features crocheted flowers in lovely pink hues.",
    price: 280.00,
    shop_voucher: "No available voucher",
    color: "Pink",
    inclusions: "Tulips and daisies",
    href: "bundle3"
};

var bundle4 = {
    image: "specialbundles/reduced/bundle4.jpg",
    name:"Purple Series",
    description: "Regal and elegant, this series showcases flowers in rich purple tones.",
    price: 280.00,
    shop_voucher: "No available voucher",
    color: "Purple",
    inclusions: "Tulips and daisies, and lavender",
    href: "bundle4"
};

var bundle5 = {
    image: "specialbundles/reduced/bundle5.jpg",
    name:"Red Series",
    description: "Passionate and bold, this series includes stunning red flowers for a striking display.",
    price: 280.00,
    shop_voucher: "No available voucher",
    color: "Red and white",
    inclusions: " 9 stem of combined Tulips and daisies",
    href: "bundle5"
};

var bundle6 = {
    image: "specialbundles/reduced/bundle6.jpg",
    name:"Goliath Rose Series",
    description: " Magnificently large roses, hand-crocheted to impress and awe.",
    price: 320.00,
    shop_voucher: "No available voucher",
    color: "Red and white",
    inclusions: "9 stem Roses",
    href: "bundle6"
};

var specialEd = {
    image: "limitedEdition/reduced/SunflowerDrop.jpg",
    name:"Rapunzel's Origin",
    description: "Enchanting and whimsical, this bouquet draws inspiration from the fairy tale of Rapunzel.",
    price: 350.00,
    shop_voucher: "No available voucher",
    color: "Yellow and purple",
    inclusions: "1 sundrop flower with Pascal",
    href: "specialEd"
};

var specialEd1 = {
    image: "byPieceproducts/bunny.jpg",
    name: "Bunnified Flower",
    description: "An adorable handmade crochet flower with a cute bunny design, perfect for adding a touch of charm to any space.",
    price: 150.00,
    shop_voucher: "10% off for orders above P500",
    color: "Blue and white",
    inclusions: "1 bunnified crocheted flower with a small basket",
    href: "specialEd1"
};





var current_product = null;
var shopping_cart = [];

function displayProduct(product) {
    toggle_popup();
    current_product = product;

    if (product.bundle) {
        document.getElementById("bundle_row").style.display = 'table-row';
    } else {
        document.getElementById("bundle_row").style.display = 'none';
    }

    document.getElementById("product_name").innerHTML = product.name;
    document.getElementById("product_desc").innerHTML = product.description;
    document.getElementById("product_img").src = product.image;
    document.getElementById("price").innerHTML = "₱ " + product.price.toFixed(2);
    document.getElementById("shop_voucher").innerHTML = product.shop_voucher;
    document.getElementById("color").innerHTML = product.color;
    document.getElementById("inclusions").innerHTML = product.inclusions;

    if (product.bundle) {
        document.getElementById("bundleof3").value = product.bundle3_price.toFixed(2);
        document.getElementById("bundleof6").value = product.bundle6_price.toFixed(2);
        document.getElementById("bundleof9").value = product.bundle9_price.toFixed(2);
        document.getElementById("bundleof12").value = product.bundle12_price.toFixed(2);
    }

    var closeButton = document.getElementById("close_toggle");
    closeButton.href = "#" + product.href;
}

function updatePrice() {
    var selectedPrice = parseFloat(document.querySelector('input[name="bundle_quantity"]:checked').value);
    document.getElementById("price").innerHTML = "₱ " + selectedPrice.toFixed(2);
}

function add_to_cart() {
    var quantity = document.getElementById("quantity").value;

    if (quantity > 0) {
        var price = current_product.price;
        if (current_product.bundle) {
            price = parseFloat(document.querySelector('input[name="bundle_quantity"]:checked').value);
        }

        var cart_item = {
            name: current_product.name,
            price: price,
            quantity: parseInt(quantity),
            image: current_product.image
        };

        shopping_cart.push(cart_item);
        update_cart();

        var confirmDialog = confirm("Successfully added to cart! Do you want to view your shopping cart?");
        if (confirmDialog) {
            toggle_remove();
            popup_cart();
        }

        document.getElementById("quantity").value = 1;
        if (current_product.bundle) {
            document.getElementById("price").innerHTML = "₱ " + current_product.price.toFixed(2);
        } else {
            document.getElementById("price").innerHTML = null;
        }
    } else {
        alert("Enter a valid quantity!!");
    }
}

function update_cart() {
    var item_list = document.getElementById('item_list');
    var total_price = document.getElementById('total_price');
    item_list.innerHTML = '';
    var total = 0;

    for (var p = 0; p < shopping_cart.length; p++) {
        var item = shopping_cart[p];

        var row = document.createElement('tr');
        row.classList.add('cart-row');

        var image_cell = document.createElement('td');
        var image_element = document.createElement('img');
        image_element.src = item.image;
        image_element.classList.add('imgcart');
        image_cell.appendChild(image_element);
        row.appendChild(image_cell);

        var name_cell = document.createElement('td');
        name_cell.textContent = item.name;
        name_cell.classList.add('class_item_name');
        row.appendChild(name_cell);

        var quantity_cell = document.createElement('td');
        quantity_cell.textContent = item.quantity + 'X';
        quantity_cell.classList.add('class_x');
        row.appendChild(quantity_cell);

        var price_cell = document.createElement('td');
        price_cell.textContent = '₱' + (item.price * item.quantity).toFixed(2);
        price_cell.classList.add('class_price');
        row.appendChild(price_cell);
 
        var delete_button = document.createElement('td');
        var delete_icon = document.createElement('span');
        delete_icon.className = 'delete_icon fas fa-trash';
        delete_icon.setAttribute('onclick', 'delete_item(' + p + ')');
        delete_button.appendChild(delete_icon);
        delete_button.classList.add('delete-button');
        row.appendChild(delete_button);

        item_list.appendChild(row);

        total += item.price * item.quantity;
    }645432                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

    total_price.textContent = ' ₱ ' + total.toFixed(2);
    total_price.classList.add('total-price');
}



function toggle_cardfields() {
    var payMethod = document.getElementById("pay_method").value;
    var nameOnCard = document.getElementById("name_on_card");
    var cardNum = document.getElementById("card_num");

    if (payMethod === "Cash_on_Delivery") {
        nameOnCard.disabled = true;
        cardNum.disabled = true;
        nameOnCard.required = false;
        cardNum.required = false;
    } else {
        nameOnCard.disabled = false;
        cardNum.disabled = false;
        nameOnCard.required = true;
        cardNum.required = true;
    }
}

window.onload = function() {
    toggle_cardfields(); // Initialize the state based on the default selected option
};


function delete_item(index) {
    shopping_cart.splice(index, 1);
    update_cart();
}



function showMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.getElementById('messageSent').classList.add('show'); // Show the message
}

function hideMessage() {
    document.getElementById('messageSent').classList.remove('show'); // Hide the message
    document.getElementById('contactForm').reset(); // Clear the input fields
}
