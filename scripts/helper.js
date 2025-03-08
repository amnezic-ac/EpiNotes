var $j = jQuery.noConflict();

//Là où l'on va stocker toutes nos requêtes ajax

export function get_directory(folder){
    var output = null;
    $j.ajax({
        url: '../php/helper.php',
        type: 'POST',
        data: {
            action: 'get_directory',
            folder: folder
        },
        async: false,
        success: function (data) {
            output = JSON.parse(data);
        },
        error: function (error) {
            console.error('Erreur', error);
        }
    });
    
    if (output){
        return output;
    }
}

export function get_contributors(){
    var output = null;
    $j.ajax({
        url: '../php/helper.php',
        type: 'POST',
        data: {
            action: 'get_contributors'
        },
        async: false,
        success: function (data) {
            output = JSON.parse(data);
        },
        error: function (error) {
            console.error('Erreur', error);
        }
    })
    if (output){
        return output;
    }
} 