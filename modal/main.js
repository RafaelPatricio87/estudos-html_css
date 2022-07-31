(function(){

    let l1 = document.querySelector('#link01')
    let l2 = document.querySelector('#link02')
    let l3 = document.querySelector('#link03')

    l1.addEventListener('click', function(){
        document.querySelector('#menu1').classList.remove('hidden')
        document.querySelector('#menu2').classList.add('hidden')
        document.querySelector('#menu3').classList.add('hidden')
    })
    l2.addEventListener('click', function(){
        document.querySelector('#menu1').classList.add('hidden')
        document.querySelector('#menu2').classList.remove('hidden')
        document.querySelector('#menu3').classList.add('hidden')
    })
    l3.addEventListener('click', function(){
        document.querySelector('#menu1').classList.add('hidden')
        document.querySelector('#menu2').classList.add('hidden')
        document.querySelector('#menu3').classList.remove('hidden')
    })
}())