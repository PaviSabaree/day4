const fs=require('fs');

// To remove directory:
// fs.rmdirSync('./newDir');

// To remove file:
// fs.unlinkSync('./newDir/newfile.js');

try{
    fs.unlinkSync('./newDir/newfile.js');
}catch(err){
    console.log(err+'here is the error');
}