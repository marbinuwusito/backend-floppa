const app = require('./src/app');
const database = require('./src/database/connection');

app.listen(app.get('port'), (error) => {

   if (error) {
      console.log(`there was an error ${error}`);
   } else {
      console.log(`server on port: ${app.get('port')}`);
   }

});
