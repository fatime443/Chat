var input=document.getElementById('input');
var main=document.getElementsByTagName('main')[0]
var chat = document.getElementById('chat')
var openBtn = document.getElementsByClassName('connect')[0]
var closeBtn = document.getElementsByClassName('close-btn')[0]

openBtn.onclick=function(){
    chat.classList.remove('d-none')
}
closeBtn.onclick=function(){
    chat.classList.add('d-none')
}
input.addEventListener('keyup',function(e){
    if(e.keyCode == 13){
        if(input.value.trim()){
            if(input.value[0].toUpperCase() == input.value[0]){
                Chat('admin')
            }
            else{
                Chat('user')
            }
            main.scrollTop = main.scrollHeight
        }
    }
})
function Chat(classname){
    var date = new Date()
    main.insertAdjacentHTML('beforeend',`
    <div class="message ${classname}">
        <p>${input.value}</p>
        <p class="time">${date.getHours()+":"+date.getMinutes()}</p>
    </div>
    `)
    input.value=""
  
  
  
  
  
  
  
  
  
    // var msdiv = document.createElement('div');
    // msdiv.classList = 'message '+ classname

    // var ptag = document.createElement('p');
    // ptag.innerText = input.value;

    // var date = new Date();
    // var ptime = document.createElement('p');
    // ptime.className = 'time'
    // ptime.innerText = date.getHours() + ':' + date.getMinutes();

    // msdiv.appendChild(ptag);
    // msdiv.appendChild(ptime)

    // main.appendChild(msdiv);
    // input.value="";
}