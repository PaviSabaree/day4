const fs=require('fs');

// renaming file:
//  fs.renameSync('./newfile2.js','newDir/newfile.js');

//  rename or move directory:
fs.renameSync('./newDir/childDir','./ParentDir');