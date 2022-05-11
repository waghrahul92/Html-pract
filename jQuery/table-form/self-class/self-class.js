$().ready(function () {





    // $(`#btn`).click( function () {



    //     $(`.let_count`).each(function () {


    //         let current = $(this).attr('target-id');
    //         console.log(current);

    //         let ack =  $(this).attr('data-color')
    //         $(this).css('background-color',ack)


    //         let oldsum = $('#' + current).val() ;


    //         if (oldsum == "" || oldsum== null) 
    //         {
    //             oldsum = 0

    //         }



    //         let currentINputVal = $(this).val()

    //         if (currentINputVal == "" || currentINputVal== null) 
    //         {
    //             currentINputVal = 0

    //         }

    //             $('#' + current).val(parseFloat(oldsum) + parseFloat(currentINputVal))




    //     });



    // });



    $(`#div_id`).on(`input`,`.let_count` , function () {





        let sum = 0;
        let current = $(this).attr(`target-id`);
        let all_attr = $("[target-id='" + current + "']")
        $(all_attr).each(function () {

            


            let currentINputVal = $(this).val()
            console.log(`current` + currentINputVal)

            if (currentINputVal == "" || currentINputVal == null) {
                currentINputVal = 0

            }
              sum += parseFloat(currentINputVal);
            

              $(`#` + current).val(sum);


        })












    })

});

