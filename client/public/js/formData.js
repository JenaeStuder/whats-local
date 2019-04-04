// script handles all the data that will be entered at the time of sign-up. 

$(() => {
    $().click({
        firstName: $().val().trim(),
        lastName: $().val().trim(),
        password: $().val().trim(),
        zipCode: $().val().trim(),
        picture: $('[type=file]').files[0],
        userType: $().val()
        
    }, (e) => {
        $.ajax({
            url: '/api/artists',
            method: 'POST',
            data: e.data 
        }).then(data => {
            console.log(`An ${e.data.userType} as been created`)
        })

        

    });

    
})