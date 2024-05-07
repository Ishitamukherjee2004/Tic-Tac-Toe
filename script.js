let Boxes = document.querySelectorAll(".Box");
let btn = document.querySelector(".btn");
let box$ = document.getElementById(`box$`);
let cnt =0;

Boxes.forEach(function(Box) {
    Box.addEventListener("click", function() {
        cnt++;
        if(cnt==1 || cnt%2!=0 && Box.innerHTML==""){
            Box.innerHTML= "<span style='font-size:8rem'>X</span>";
        }
        else if(cnt%2==0 && Box.innerHTML==""){
            Box.innerHTML= "<span style='font-size:8rem'>O</span>";
            
        }
        else if(Box.innerHTML!=""){
            alert("You can not overwrite on the filled box");
            cnt--;
        }
        if(box1.innerHTML==box2.innerHTML && box2.innerHTML==box3.innerHTML && box1.innerHTML!="" && box2.innerHTML!="" && box3.innerHTML!=""){
            alert(box1.innerText+" Won");
        }
        else if(box1.innerHTML==box4.innerHTML && box4.innerHTML==box7.innerHTML && box1.innerHTML!="" && box4.innerHTML!="" && box7.innerHTML!=""){
            alert(box1.innerText+" Won");
        }
        else if(box1.innerHTML==box5.innerHTML && box5.innerHTML==box9.innerHTML && box1.innerHTML!="" && box5.innerHTML!="" && box9.innerHTML!=""){
            alert(box1.innerText+" Won");
        }
        else if(box3.innerHTML==box5.innerHTML && box5.innerHTML==box7.innerHTML && box3.innerHTML!="" && box5.innerHTML!="" && box7.innerHTML!=""){
            alert(box3.innerText+" Won");
        }
        else if(box4.innerHTML==box5.innerHTML && box5.innerHTML==box6.innerHTML && box4.innerHTML!="" && box5.innerHTML!="" && box6.innerHTML!=""){
            alert(box4.innerText+" Won");
        }
        else if(box7.innerHTML==box8.innerHTML && box8.innerHTML==box9.innerHTML && box7.innerHTML!="" && box8.innerHTML!="" && box9.innerHTML!=""){
            alert(box7.innerText+" Won");
        }
        else if(box2.innerHTML==box5.innerHTML && box5.innerHTML==box8.innerHTML && box2.innerHTML!="" && box5.innerHTML!="" && box8.innerHTML!=""){
            alert(box2.innerText+" Won");
        }
        else if(box3.innerHTML==box6.innerHTML && box6.innerHTML==box9.innerHTML && box3.innerHTML!="" && box6.innerHTML!="" && box9.innerHTML!=""){
            alert(box3.innerText+" Won");
        }
        else if(box1.innerHTML!="" && box2.innerHTML!="" && box3.innerHTML!="" && box4.innerHTML!="" && box5.innerHTML!="" && box6.innerHTML!="" && box7.innerHTML!="" && box8.innerHTML!="" &&  box9.innerHTML!=""){
            alert("Tie");
        }
        
    });
    
});

btn.addEventListener("click", function(){
    Boxes.forEach(function(Box){
        Box.innerHTML="";
    })
})




