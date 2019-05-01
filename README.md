# ProtoType
Node server prototype and data testing 

My goal for this assignment is to build a web-app that will have a live display of google analytics data.

-I began this project by researching Google Analytics, and different apis that display data sets. While doing this I began to map what would need to be created for this prototype to be successful.
	Requirements:
			- Server for running web-app + processing data.
				- easy option was node express server. 
					-php & python were also deccent options.

			- A website and web-adress ablle to be authenticated by google analytics.
				-good options were github & Heroku.
			-Access to Google Reporting API and its sub apis
					-reporting
					-User tracking.

The first thing I did was experiment with different simple node app starts. I progressed down the node express server as its easy to run local and can be hosted by github (not always running). Experimenting with Console.log() and Debug() gave in the server gave me some ideas about receiving data to thge server and being able to print/read the data for display in another document 
    																				
																						app.get('/', (req, res) => {
																						  res.sendFile(path.join(__dirname, 'index.html'));
																						});

																						app.use(bodyParser.urlencoded({extended: true}));
																						app.use(bodyParser.json());
																						app.post('/createEmp', function(req, res){  
																						console.log(req.body);
																						}); 

																						app.get('/createEmp', (req, res) => {
																							res.sendFile(path.join(__dirname, 'index.html'));
																						console.log();

Google Analytics is a very versitile, simple and complex tool. I began this assignment thinking it would be easy to get acces to the data and specify what i was looking for. After playing around with the custom views and api  information i decided that it would be best to just get data transmitting first before bothering with specifics. 

setting up Google analytics was fairy simple, however I had a few hiccups with not authorising it properly or it rejecting the hosted web app due to invalid tracking credentials. I fixed these errors as they were cause mainly by typos.

Once I began to messs with the different APIS i decided that the best one currently avliable would be the Reporting API and messing with its hit register and intercepting its html request data. THIS IS WHEN IT GOT COMPLICATED
		- This was the rabit hole of the asignment and most things required alot of backend knowledge.
			--RESOURCES--
							- https://developers.google.com/analytics/devguides/reporting/
							- https://developers.google.com/analytics/devguides/reporting/core/v4/samples
							- https://support.angelfishstats.com/hc/en-us/articles/231570408
							- http://daynebatten.com/2015/07/raw-data-google-analytics/
							- http://daynebatten.com/2015/07/send-google-analytics-data-to-your-own-server/
							- https://developers.google.com/analytics/devguides/collection/analyticsjs/debugging
							- https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id
							- https://www.youtube.com/watch?v=pKd0Rpw7O48
							- https://flaviocopes.com/google-analytics-api-nodejs/
many more that I didnt save links to

			--CODE RESOURCES--
							- https://gist.github.com/daynebatten/42952a9ea36f55c28951#file-ga_redirect-js
							- https://gist.github.com/daynebatten/6e400d6a54524292ab03#file-process_ga_data-php
							- https://developers.google.com/analytics/devguides/reporting/core/v4/samples
							- https://flaviocopes.com/google-analytics-api-nodejs/
							- https://developers.google.com/drive/api/v3/quickstart/nodejs

I took bits and pieces from most of these places but changed it alot and got rid of bits in different versions of my code. (git repo history should show) still have the original files saved as -
												-detour.js
												-GA_Raw.js
												-process.php

getting my api to report properly was difficult due to a lack of trafic on the website and that I couldnt figure out how to report a live feed to analytics data. Google is currently beta testing an api for live analytics reporting but i couldnt get access to it.

the reporting API automatically builds a query and return function when you put it onn your webpage. which i diverted to send to my node server so the page is clean and you can see the data being shown in the console.log(). This was challenging to me for something so simple and after taking a small break and having a friend look at the code I was able to get it working properly. (although it shows a series of catching errors its working properly just the errors get thrown up because its unorthodox).

Version 2 -
	I wasnt satisfied with the  first protoType i build...  So i decided to make a couple more iterations on methods based on the side of live data reporting (big mistake). This was very complicated with alot of grey area tactics and security breach methods. I didnt get very far with them but i have kept these files anyway and will upload them to blackboard.  

After i had finished with my trials and decided to go back to the main prototype a huge problem occured. 

--MY ENTIRE WORKING FILE ENCRYPTED--
 -I discovered that my entire working file had encrypted itself and i could no longer access any of it or run it. 
 -this was a huge problem as my working file was much further ahead than my github repo.
 -This means start again from about 8 hours of work previous. 


                                                              --Summary--
My ProtoType didnt end up doing live data reading like my goal. But i did get it to the point where my node server is extracting analytics data and sending it to the website hidden in the console.log(). With more time I believe getting/buuilding a live report api is possible although  the web-app style isnt able to provide as much data as a native  phone app would. If i were to do this assignemnt again I might have built a native app instead as it would have been an easier/more acheivable goal. But I wouldnt have learnt the things that i have.

While developing these ProtoTypes I have learnt alot about APIs, Analytics, metrics, algorythms, Node.js, gotten alot of javascript practise and even revisted old languages I havent used in a long time like php. The monetisation and metrics topic are incredibly interesting with endless possibilities to continue developing into. Even though my ProtoTye wasnt very successful I learnt alot about how tools like google analytics and different apis/ server styles and am fairly happy with the progress that I made.







