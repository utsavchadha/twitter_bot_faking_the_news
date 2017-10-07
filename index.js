console.log('This app is starting');

var Twit = require('twit');
var config = require('./config');
var exec = require('child_process').exec;
var fs = require('fs');

var T = new Twit(config);
//var cmd = "processing-java --sketch=`pwd`/meme_generator --run";

setInterval(postTweet, 1000*30);

function postTweet() {
	var tweet = {
			status: "Greetings y'all!"
		}
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if(err) {
			console.log("Something went wrong while posting the tweet");
		} else {
			console.log("The tweet was posted.");
		}
	}
}