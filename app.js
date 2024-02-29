const car = document.getElementById('car'),
car_container = document.getElementById('car-container'),
car_container_width = 952,
car_container_height = 483;
window.addEventListener('keydown',(e)=>{
    var pos_x = car.getBoundingClientRect();
    var inital_car_postionX = pos_x.left;
    var inital_car_postionY = pos_x.top;
    var inital_car_postion_y =pos_x.bottom;
    if(e.key=='d'){
        var new_pos_r = inital_car_postionX+10+'px';
        if(new_pos_r>'85vw'){
           car.style.left = '10px';
           new_pos_r = '10px';
        }
        car.style.left = new_pos_r;
    }
    else if(e.key=='a'){
        var new_pos_l = inital_car_postionX-150+'px';
        if(new_pos_l<='10vw'){
            car.style.left = '10px';
            new_pos_l = '10px';
         }
        car.style.left = new_pos_l;

    }
    else if(e.key=='s'){
        var new_pos_t = inital_car_postionY+20+'px';
        if(new_pos_t>='45vh'){
            car.style.top = '20px';
            new_pos_t = inital_car_postionY;
        }
        car.style.top = new_pos_t;
    }
    else if(e.key=='w'){
        var new_pos_b = inital_car_postion_y-10+'px';
        if(new_pos_b<='20vh'){
            car.style.top = '20px';
            new_pos_b = inital_car_postion_y;
        }
        car.style.bottom = new_pos_b;
    }

});