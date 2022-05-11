
// //  let ptr = document.getElementById("result1");
// function get_color_red()
// {
//  let ptr = document.getElementById("result1");
//   ptr.classList=[]
//  ptr.classList.add("red");

//  } 
//  function get_color_blue()
//  {
// let ptr = document.getElementById("result1");
// ptr.classList=[]
//  ptr.classList.add("blue");

//  } 
//  function get_color_green()
//  {
//  let ptr = document.getElementById("result1");
//  ptr.classList=[]
//  ptr.classList.add("green");

//  } 
//  function get_color_black()
//  {
// let ptr = document.getElementById("result1");
// ptr.classList=[]
//  ptr.classList.add("black");

//   }



function color_change(id)
 {
    let el = document.getElementById(id);
    let style = getComputedStyle(el)
    let ptr = document.getElementById("result1");
    ptr.style.backgroundColor=style.backgroundColor

}