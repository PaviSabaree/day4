const fs= require('fs');
fs.access('./views', function(error){
    if (error){
        console.log('folder does not exist');
        fs.mkdir('views', function(error){
            if(error) return error;
            fs.writeFile('./views/new.html','HELLO',function(error){
                if (error){
                    console.log('we couldnot write');
                }
            });
        });
    }
});