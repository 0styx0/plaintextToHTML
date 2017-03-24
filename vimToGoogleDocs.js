var fs = require("fs");

// for sub-bullets use tab
  
  var input = process.argv[2];
  var output = process.argv[3];

  fs.readFile(input, 'utf-8', function(err, data){

      if (err) throw err;

       var spaces = "";

       for (var i = 0; i < 8; i++) {
	       spaces += "&nbsp;";
       };

       var newValue = data.replace(/(.+)\n/gi, "<li>$1</li>\n").replace(/\n\n/gi, "<br />").replace(/<li>\t(.*)<\/li>/gi, spaces + "o $1").replace(/(Q|A\d?):/gi, "<em>$1</em>:").replace(/\:\s([a-zA-Z\'"\s]+):/gi, ": <u>$1</u>:");

       newValue = '<font size="12pt">' + newValue + '</font>'; 

       fs.writeFile(output, newValue, 'utf-8', function (err) {
	       
	   if (err) throw err;
           console.log('filelistAsync complete');
       });
  });
