const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
		? process.env.MONGODB_URI 
		: 'mongodb://localhost/mernstacktest';

mongoose.connect(URI, {	
	useNewUrlParser: true, 
	useCreateIndex: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', ()=> {
	console.log('Database connection established');
});