//Code this app to calculate when the next train will arrive, this should be relative to the current time
//users from many different machines must be able to view same train times


//provide up-to-date information about arrival times, and how many minutes remain until they arrive using moment.js

//initialize Firebase
 var config = {
    apiKey: "AIzaSyDS2YQb1YqdKJzV7ypuv8VAHgOVi5z8D6I",
    authDomain: "traintime-76410.firebaseapp.com",
    databaseURL: "https://traintime-76410.firebaseio.com",
    storageBucket: "traintime-76410.appspot.com",
    messagingSenderId: "480340291719"
  };

firebase.initializeApp(config);


//when the user clicks submit 
$('#submit').on('click', function() {
	//Grab user input
	var trainName = $('#name').val().trim();
	var destination = $('#destination').val().trim();
	var firstTime = $('#firstTime').val().trim();
	var frequency = $('#frequency').val().trim();

	//Create local "temporary" object for adding train name, destination, first train, and frequency
	var newTrain = {
		name: trainName;
		destTrain: destination;
		firstTrainTime: firstTime;
		freqTrain: frequency;
	}

	//Upload train info to the database
	database.ref().push(newTrain);
	//Log input to console
	console.log(newTrain.name);
	console.log(newTrain.destTrain);
	console.log(newTrain.firstTrainTime);
	console.log(newTrain.freqTrain);
	//Cleans all of the text-boxes
	$('#trainName').val("");
	$('#destination').val("");
	$('#firstTime').val("");
	$('#frequency').val("");
	//Prevents moving to new page 
	return fale;
});







