const 
   express = require('express'),
   app = express();
   
app.use(express.static(__dirname + '/../dist/assets'));
   
app.listen(8080, () => {console.log('express listening on port 8080')});