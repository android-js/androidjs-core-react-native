const back = require('androidjs').back;

back.on('hii', function(){
    back.send('hello');
})