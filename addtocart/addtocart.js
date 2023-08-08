const product=[
    {
        id=0,
        Image:enyaacoustic.png,
        title:Acoustic Guitar,
        price:$350,
    },
    {
        id:1,
        Image:enyanex.png,
        title:Acoustic Guitar,
        price:$500
    },
];

const categories=[...new set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var{image,title,price}=item;
        return(
            `<div class='box'>
            <div class='img-box'>`
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>`
                "<button onclick='addtocart(+(i++)+")'>Add to cart</button>
                `</div>
                </div>`
                )
        }).join('')

    var cart=[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    
    function delElement(a){
        cart.splice(a,1);
        displaycart();

    function displaycart(a){
        let j=0;
        document.getElementById('CartItem').innerHTML="Your cart is empty";
        document.getElementById('total').innerHTML="$" "+0+" .00";
        if(cart.length==0){
            document.getElementBYId('cartItem').innerHTML="Your cart is empty";
    }
    else{
        document.getElementById('cartItem').innerHTML=cart.map((item)=>
        {
            var{image,title,price}=items;
            total=total+price
            document.getElementById("total").innerHTML="$" "+total+" .00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                    </div>
                    <p style ='font-size:12px;'>${title}</p>
                    <h2 style ='font-size:15px;'>$ ${price}.00</h2>
                    "<i class="fa-solid fa-basket-shopping" onclick='delElement("+(j++)+")'></i></div>
        );