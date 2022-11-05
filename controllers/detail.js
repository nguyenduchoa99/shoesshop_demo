const urlParams = new URLSearchParams(window.location.search)
function getListShoseId(myParam) {

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + myParam,
        method: 'GET',
        ResponseTypex : 'JSON',
    });
    promise.then(function (result) {
        console.log(result.data.content);
        renderProductId(result.data.content);
        
    });
    promise.catch(function (error) {
        console.log(error);
    });
};

function renderProductId(productId) {
    var html = '';
    var detail = productId;
       html = ` 
       <div class="row-1">
            <div class="col-left">
                <div class="img">
                    <img src="${detail.image}" alt="">
                </div>
            </div>
            <div class="col-right">
                <h1>${detail.name}</h1>
                <p>${detail.description}</p>
                <h3>Available size</h3>
                <div class="button-size" id="size"></div>                    
                <h4>${detail.price}$</h4>
                <div class="button-amount">
                    <button class="button-plus">+</button>
                    <span>1</span>
                    <button class="button-minus">-</button>
                </div>
                <div class="button-add">
                    <button>Add to cart</button>
                </div>                    
            </div>
        </div>
       `
    document.querySelector('#detail').innerHTML = html;

       const size = detail.size // mảng size
       const sizeRender = size.reduce((value, size, index) => {
           return value += `<button class="button-size">${size}</button>`
       }, '')
       document.querySelector('#size').innerHTML = sizeRender
       
    return html;
};
function getListShose() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseTypex : 'JSON',
    });
    promise.then(function (result) {
        console.log(result.data.content);
        renderProduct(result.data.content);
    });
    promise.catch(function (error) {
        console.log(error);
    });
};
function renderProduct(arrProduct) {
    var html = '';
    for (var i = 0; i < arrProduct.length; i++) {
        var shose = arrProduct[i];
        html += `
        <div class="col col-lg-4 col-md-6 col-sm-12">
                <div class="card-body">
                    <div class='img-top'>
                         <img src="${shose.image}" alt=""/>
                    </div>
                     <div class='bottom-1'>
                         <h4>${shose.name}</h4>
                    </div>
                    <div class='bottom-2'>
                        <span>${shose.shortDescription}</span>
                    </div>
                </div>
                <div class ='btn-buy'>
                <a href="./detail.html?producid=${shose.id}" class="btn-buy-shose">Buy now</a>
                    <span>$${shose.price}</span>
                </div>
        </div>
        `;
    };
    document.querySelector('#products').innerHTML = html;
    return html;
}
window.onload = function () {
    getListShose();
    const urlParams = new URLSearchParams(window.location.search)
    const myParam = urlParams.get('producid')
    // console.log('my',myParam);
    getListShoseId(myParam);
}