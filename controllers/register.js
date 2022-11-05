document.querySelector('#btn-submit').onclick = function(){
    var user = new User();
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;
    user.name = document.querySelector('#name').value;
    if(document.querySelector('#male').checked){
        user.gender = true;
    }else if(document.querySelector('#female').checked){
        user.gender = false;
    }
    user.phone = document.querySelector('#phone').value;
     
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        ResponseType: 'JASON',
        data:user,
    });
    promise.then(function(result){
        console.log(result.data.content);
        alert('Successful Registration');
    });
    promise.catch(function(error){
        console.log(error);
    });
// console.log(user);
};