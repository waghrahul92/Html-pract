





//  function output_box(num) {
//     document.querySelector(`.output_window`).innerHTML = ''

//      for (let i = 0; i < num; i++) {
//          let newDiv =
//              ` <div class="box_box"></div>`
//          document.querySelector(`.output_window`).innerHTML += newDiv;


//      }
//  }

// function  box_add(element)
//  {

//    num=element.key
//    console.log(element)
//    output_box(num);
//    document.getElementById(`text_id`).focus();
//  document.getElementById(`text_id`).onblur= function()
//  {

//     document.getElementById(`text_id`).focus();
//  }


// }


// window.onkeyup = box_add;
// document.getElementById(`text_id`).focus();
//  document.getElementById(`text_id`).onblur= function()
//  {

//     document.getElementById(`text_id`).focus();
//  }
// //document.getElementById('text_id').onblur();







let prev_color = "blue";


function box_loop(temp) {
    let count_time = temp * 1000; //count time


    document.getElementById(`output_id`).innerHTML = "";

    // document.getElementById("text_id").value = "";
    if (prev_color == "red") {
        prev_color = "blue";
    }
    else {
        prev_color = "red";
    }

    for (let i = 0; i < temp; i++) {


        let newDiv =
            ` <div id="${i}" style="background-color:${prev_color}" onclick="box_delet(${i})" class="box_box">${i}</div>`
        document.querySelector(`.output_window`).innerHTML += newDiv;

    }


    setTimeout(remove_box, count_time);


}

function remove_box() {
    const box = document.getElementById(`input_val_id`);


    // 👇️ hides element (still takes up space on page)
    box.style.visibility = `hidden`;

}


function box_show(e) {
    let temp = e.key
    // let temp = document.getElementById("text_id").value;
    console.log(temp);
    let checkBox = document.getElementById(`checkbox_id`);
    if (isNaN(temp) || temp == '' || temp == null) {




    }
    else {
        box_loop(temp)
        if (checkBox.checked == true) {

            colorChange(temp);
        }
        else {
            colorChangePreviousColorSetAgain(temp)
        }




        // let newDiv2 =`<span id="input_val_id" class="input_value">${temp}</span>`

        document.getElementById(`input_val_id`).innerHTML = temp;
        document.getElementById(`input_val_id`).style.visibility = `visible`;

    }


}



function box_delet(i) {
    let box_delet_arry = document.getElementById(i)
    box_delet_arry.remove();
    // box_delet_arry.style.background = `yellow`;
}


function colorChange(temp) {
    let i = 0;
    var interval = setInterval(function () {
        if (i < temp) {
            let boxColorChange = document.getElementById(i);
            boxColorChange.style.background = `yellow`;
            i++;
        } else {
            clearInterval(interval);
        }

    }, 1000);
}

function colorChangePreviousColorSetAgain(temp) {
    
    let i = 0;
    var interval = setInterval(function () {
        console.log(i)
     let colordd = document.querySelectorAll(`.box_box`);
     for (const iterator of colordd) {
        iterator.style.background=`red`;
         
     }
     
    
        if (i < temp) {
             elementColor = document.getElementById(i);
             elementColor.style.background =`yellow`;
            // console.log(elementColor);
        
            // let cssobj = window.getComputedStyle(elementColor, null);
            // let bgColor = cssobj.getPropertyValue("background-color");
            //      console.log(bgColor);
                //  if ( bgColor== `yellow`) {
                   
                    
                //      alert(`if`);
                //      elementColor.style.background =bgColor;
                //  }
                //  else
                //  {
                //      alert(`else`)
                    
                //      elementColor.style.background =`yellow`;
                //  }
            
            
            i++;
            

       
        } 
        
        else {
            clearInterval(interval);
        } 
       

    }, 1000);
    

}
window.onkeyup = box_show;
document.getElementById(`text_id`).focus();
document.getElementById(`text_id`).onblur = function () {

    document.getElementById(`text_id`).focus();
}






