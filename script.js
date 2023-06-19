function passwordGeneration(){
    let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-=?<>{}[]"
    let password=''
    let passwordLength=prompt('طول رمز موردنیاز را مشخص کنید');
    for(let i=0;i<passwordLength;i++){
        let randomNumber=Math.floor(Math.random()*chars.length)
        password+=chars.substring(randomNumber,randomNumber+1)
    }
    document.querySelector("input").value=password
}