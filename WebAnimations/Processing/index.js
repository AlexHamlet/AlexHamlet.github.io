var loc = window.location.pathname;

var topFolder = new Folder(loc);
var fileandfolderAr = scanSubFolders(topFolder,/\.(jpg|tif|psd|bmp|gif|png|)$/i);

var fileList = fileandfolderAr[0];

for(var a = 0 ;a < fileList.length; a++)

{

var docRef = open(fileList);

//do things here

}

function scanSubFolders(tFolder, mask) { // folder object, RegExp or string
    var sFolders = new Array();
    var allFiles = new Array();
    sFolders[0] = tFolder;
    for (var j = 0; j < sFolders.length; j++){ // loop through folders            
        var procFiles = sFolders.getFiles();
        for (var i=0;i<procFiles.length;i++){ // loop through this folder contents
            if (procFiles instanceof File ){
                if(mask==undefined) allFiles.push(procFiles);// if no search mask collect all files
                if (procFiles.fullName.search(mask) != -1) allFiles.push(procFiles); // otherwise only those that match mask
        }else if (procFiles instanceof Folder){
            sFolders.push(procFiles);// store the subfolder
            scanSubFolders(procFiles, mask);// search the subfolder
         }
      }
   }
   return [allFiles,sFolders];
};