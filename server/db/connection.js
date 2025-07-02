const mongoose = require('mongoose');

const url = `mongodb+srv://ashishgupta980876115:Ashi0518@cluster0.nznctct.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))