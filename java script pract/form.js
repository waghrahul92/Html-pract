

//     function result()
//      {
//         let inputValName = document.getElementById("name_id").value;
//         let inputValContact = document.getElementById("contact_id").value;
//        let x  = document.getElementById("name_data").innerHTML;
//        document.getElementById("name_data").innerHTML = x + '<div><span>' + inputValName +'</span>' + '<span>' + inputValContact + '</span></div>';
//        document.getElementById("name_id").value = '';
//        document.getElementById("contact_id").value = '';

// }
let temp_id = 0;
let get_edit_id = 0



function result() {


    let inputValName = document.getElementById(`name_id`).value;
    let inputValContact = document.getElementById(`contact_id`).value;
    //     let x = document.getElementById(`name_data`).innerHTML;
    //      let y = document.getElementById(`contact_data`).innerHTML;

    //     document.getElementById(`name_data`).innerHTML= x + `<div><span> ${inputValName}  </span></div>`;
    //  document.getElementById(`contact_data`).innerHTML= y + `<div><span> ${inputValContact}  </span></div>`;
    //  document.getElementById("name_id").value = '';
    //  document.getElementById("contact_id").value = '';



    //     let temp=tem;
    //    let tem=0

    //     if (temp < 18) {
    //      tem= 1;
    //     } else {

    //     }
    temp_id = temp_id + 1;  /// for dinamic id assign



    let newDiv = `<div class="label_data label_grid" id="${temp_id}">
         <div>
            <img class="man" src="java_img/man icon.png" alt="">
        </div>
        <div class="text_data_class" id="name_data${temp_id}">
            ${inputValName}
        </div>
        <div>

        </div>
        <div>
            <img class="phone" src="java_img/phone icon.png" alt="">
        </div>
        <div class="text_data_class" id="contact_data${temp_id}">
            ${inputValContact}

        </div>
        <div>
            <button id="edit_btn_id${temp_id}" onclick="edit_click(${temp_id})" class="edit">
                <img  class="btn" src="java_img/edit_icon.png" alt="" width="15px">
            </button>
        </div>
        <div>
            <button onclick="trush_bin_click(${temp_id})" class="trush_bin">
                <img src="java_img/trush bin.png" alt="" width="18px">
            </button>
        </div>
    </div>`

    document.getElementById('output_id').innerHTML += newDiv;

    document.getElementById("name_id").value = "";
    document.getElementById("contact_id").value = "";
    
    //$("#exampleModal").modal('hide');

    
}


function showModal(){
   // $("#exampleModal").modal('show');
}

function trush_bin_click(id) {
    let text = "You Delete This Row!\nEither Ok or Cancel.";
    if (confirm(text) == true) {

        let get_id_div = document.getElementById(id);
        get_id_div.remove();
    }
    else {
        text = "cancle";
    }


}
function edit_click(id) {
    document.getElementById(`name_id`).value = document.getElementById("name_data" + id).innerHTML;
    document.getElementById(`contact_id`).value = document.getElementById("contact_data" + id).innerHTML;
    //   let btn = document.getElementById("btn_id").innerText="Update"
    document.getElementById("btn_bunch1").style.visibility = "hidden";
    //   document.getElementById("btn_bunch2").style.visibility = "visible";
    // let get_id_name = document.getElementById("name_data"+id);
    // let get_id_contact = document.getElementById("contact_data"+id);
    // document.getElementById("btn_bunch2").style.visibility = "visible";
    get_edit_id = id;





}
function update_result(id) {

    //    let inputValName = document.getElementById(`name_id`).value;
    //    let inputValContact = document.getElementById(`contact_id`).value;
    //    let x = document.getElementById(`name_data`+id).innerHTML;
    //     let y = document.getElementById(`contact_data`+id).innerHTML;
    document.getElementById("name_data" + get_edit_id).innerHTML = document.getElementById(`name_id`).value;
    document.getElementById("contact_data" + get_edit_id).innerHTML = document.getElementById(`contact_id`).value;
    // document.getElementById("btn_bunch1").style.visibility = "visible";
    // document.getElementById("btn_bunch2").style.visibility = "hidden";
    document.getElementById("name_id").value = '';
    document.getElementById("contact_id").value = '';


}
function open_window()
{
   let open_window_result = document.getElementById(exampleModal);
   open_window_result.visibility= true; 
}




