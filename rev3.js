const fs = require('fs');




const p = new Promise((resolve, reject) => {
		fs.readFile('rev2.json', { encoding: 'utf8' }, (err, data) => {

	if (err) {
        reject()
    }else{
    	
    	resolve(JSON.parse(data))
    }

})
 
});

//p.then(console.log) 
p.then(({ dragons }) => {

	
	dragons.sort((a,b)=> b.age - a.age)
	console.log(dragons)
});
