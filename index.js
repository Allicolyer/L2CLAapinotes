var request = require('request');

var options = {
  url: 'https://api.github.com/users/allicolyer/repos',
  headers: {
    'User-Agent': 'request'
  }
};
		

request(options, function (error, response, body) {
  	if (!error && response.statusCode == 200) {
    	var nice = JSON.parse(body);
    
    	nice.forEach(function(item){
    		if (item.size > 200){
    			var repo = item.name
    			var optionstwo =  {
    				url: 'https://api.github.com/repos/allicolyer/'+ repo,
  					headers: {
    					'User-Agent': 'request'
  							}
					};

    			request(optionstwo,function(ohno,answer,stuff) {
    				if (!ohno && answer.statusCode == 200) {
    					var hi = JSON.parse(stuff);
    							console.log(JSON.stringify(hi.git_url,null, 2));
    				};
    			});
    			//console.log(JSON.stringify(item.git_url,null, 2)); // Show the HTML for the Google homepage.
    			//console.log("----------------")
    		};	
    	});
    		// console.log(JSON.stringify(nice[i].id ,null, 2)); // Show the HTML for the Google homepage.
	}
});