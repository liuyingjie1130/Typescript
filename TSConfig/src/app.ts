console.log('src->app')
// 这是注释
function f(a,b){
    return a+b
}

function f1(this:Window) {
    alert(this)

}

let box = document.getElementById("box1");
box.addEventListener('onclick',function () {
    alert(1)
})

box?.addEventListener('onclick',function () {
    alert(1)
})




