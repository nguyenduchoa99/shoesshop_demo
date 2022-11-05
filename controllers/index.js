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
window.onload = function () {
    getListShose();
}

function renderProduct(arrProduct) {
    var html = '';
    for (var i = 0; i < arrProduct.length; i++) {
        var shose = arrProduct[i];
        html += `
        <div class='col-lg-4 col-md-6 col-sm-12'>
        <div class='card-body'>
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
        
        <div class = 'btn-buy-2'>
        <a href="./detail.html?producid=${shose.id}" class="btn-buy-shose">Buy now</a>
              <span>$${shose.price}</span>
        </div>
        
        
        </div>  
        `;
    };
    document.querySelector('#tbl-content').innerHTML = html;
    return html;
}