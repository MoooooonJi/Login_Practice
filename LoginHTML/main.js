const idInput = document.querySelector(".idid");
const pwInput = document.querySelector(".pwpw");
const loginBtn = document.querySelector(".btnLogin");

loginBtn.addEventListener("click", function(event) {
    
    fetch('user.json').then(response => response.json()).then(data => {
        console.log(data);
        for (const user of data){
            if(idInput.value === user.id && pwInput.value === user.pwd){
                console.log("환영합니다",`${user.name}님!`)
            }else{
                event.preventDefault(); 
            }
        }
    }).catch(error => {
        console.error('버그', error);
    });
});