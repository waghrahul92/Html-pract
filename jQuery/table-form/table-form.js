$().ready(function () {
   var colCount= $(`#table-id th `).length;
      $(`#img_id`).click(get_new_div)
    
    for (let i = 0; i <= colCount; i++) {

        $(`#table-id`).on(`input`, `.inputClass-expens${i}`, function () {
           
            var calculate_total_sum = 0;
            var calculate_total_avg = 0;
            let count = 0;
           
           
           


            $(`#table-id .inputClass-expens${i}`).each(function () {

                var get_Textbox_Value = $(this).val();

            
                count = count + 1;
                console.log(count)

                if ($.isNumeric(get_Textbox_Value)) {
                    calculate_total_sum += parseFloat(get_Textbox_Value);
                    console.log(calculate_total_sum)
                    calculate_total_avg = calculate_total_sum / count;
                    console.log(calculate_total_avg);

                }

            });
            let cal_flot_sum = parseFloat(calculate_total_sum).toFixed(2);
            let cal_flot_avg = parseFloat(calculate_total_avg).toFixed(2);
          
            $(`#id-total-expens${i}`).html( cal_flot_sum);
             $(`#id-averge-expens${i}`).html(cal_flot_avg);
            // get_expence_avg()
            calculate_grand_total()
            calculate_grand_total_avg()

        });

    }


});

function calculate_grand_total() {
    let grand_total = 0;
    $(`#table-id .inputClass-total-expens`).each(function () {
        var get_Total_Value = $(this).html();
        let value = parseFloat(get_Total_Value);
        if (isNaN(value)) {

        } else {
            grand_total += value;

        }
      
    });
    let grand_total_flot = parseFloat(grand_total).toFixed(2)
    $(`#grand_total_id`).val(grand_total_flot);
}

function calculate_grand_total_avg() {
    let grand_total_avg = 0;
    var rowCount = $(`#table-id th `).length;
    var get_grand_total_avg = $(`#grand_total_id`).val();

    var row_count_data = rowCount-1;

    let grand_value = parseFloat(get_grand_total_avg);
        if (isNaN(grand_value)) {

        } else {
            grand_total_avg = grand_value / row_count_data;

        }

    // $(`#table-id .inputClass-averge-expens`).each(function () {
    //     console.log(get_grand_total_avg);
        
           
    
        
    // });
    let grand_total_avg_flot = parseFloat(grand_total_avg).toFixed(2)
    $(`#grand_avg_id`).val(grand_total_avg_flot);
}
 
// function get_expence_avg()
// {    
//     var rowCount =   $(`#table-id tr `).length;
//     var colCount = $(`#table-id th `).length;
//     for (let i = 0; i < colCount; i++) 
//     {
        
//      let avg_val =  $(`#id-total-expens${i}`).html();
//      if ($.isNumeric(get_Textbox_Value))
//      {
//      avg = avg_val / rowCount;
//      }
//      $(`#id-averge-expens${i}`).html(avg)
//     }
    

// }
function get_new_div()
 {
    
    $(`#total_id`).before(` <tr>
    <td>APRIL</td>
    <td><input class="inputClass-expens1" type="text"></td>
            
    <td><input class="inputClass-expens2" type="text"></td>
           
    <td><input class="inputClass-expens3" type="text"> </td>
            
    
    <td><input class="inputClass-expens4" type="text"> </td>
            
</tr>`);
//    $(`#table-id`).append()
 }