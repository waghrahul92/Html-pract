


//  let click_btn = document.querySelectorAll(".btn_class");
//  for (let i = 0; i < click_btn.length; i++) {
//     const element = click_btn[i]
//     click_btn[i].onclick = function click_button()
//      {

//         let temp = document.querySelectorAll(".text_change");
//         temp[i].innerHTML = "Text Chage Sucssesfully";

//    }    



// }

let text_input_arry = document.querySelectorAll(".text_input");
for (let i = 0; i < text_input_arry.length; i++) {
   const element = text_input_arry[i];



  
   text_input_arry[i].onkeyup = function click_text_field() {
      // let text_input_arry = document.querySelectorAll(".text_input")
      // text_input_arry[0].value="";
      let temp = document.querySelectorAll(".text_change");
      temp[i].innerHTML = "";
      //text_input_arry[0].value="" = temp[0].innerHTML="";
      //text_input_arry[0].value += temp[0].innerHTML;
      temp[i].innerHTML += text_input_arry[i].value;
   }
}





