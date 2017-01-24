$(document).ready(function(){
	$.ajax({
		url: "https://www.reddit.com/.json?jsonp=display",
		method: "get",
		dataType: "jsonp",
		jsonp: "callback",
		jsonpCallback: "display"
	});	

	
});

function display(data) {

	$.each(
        data.data.children.slice(0, 10),
        function (i, post) {
        	if (post.data.ups > 10000) 
        	{
        		var upCount = (post.data.ups / 1000).toFixed(1)+"k";
        		
        	}
        	else 
        	{
  				upCount = post.data.ups;
        	}
        	var currentTime = (new Date).getTime();
        	
        	
        	var postedTime = post.data.created_utc * 1000;
        
        	var elapsedTime = currentTime - postedTime;
        	
        	var et =  timeConversion(elapsedTime);
        	function timeConversion(millisec) {

		        var seconds = (millisec / 1000).toFixed(0);

		        var minutes = (millisec / (1000 * 60)).toFixed(0);

		        var hours = (millisec / (1000 * 60 * 60)).toFixed(0);

		        var days = (millisec / (86400000)).toFixed(0);

		        if (seconds < 60) {
		            return seconds + " seconds";
		        } else if (minutes < 60) {
		            return minutes + " minutes";
		        } else if (hours < 24) {
		            return hours + " hours";
		        } else {
		            return days + " days"
		        }
		    }	
          var item = $("<div></div>").addClass("item");
          var div1 = $("<div>").addClass("vote-section");
          var up = $("<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-arrow-up'></span></button>");
          var count = $("<div></div>").text(upCount);
          var down = $("<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-arrow-down'></span></button>");
          div1.append(up,count,down);
          var image = $("<img src="+ post.data.thumbnail +">").addClass("thumbnail");
          var div3 = $("<div>").addClass("post-details");
          var title = $("<div></div>").text(post.data.title)
          var timestamp = $("<div>").text(et + " ago");
          var subreddit = $("<div>").text("submitted to /r/" + post.data.subreddit);
          var comments = $("<div>").text(post.data.num_comments + " comments");
          div3.append(title,timestamp,subreddit,comments);
          item.append(div1,image,div3);
          $("#reddit-content").append(item);
  	  
          $("#reddit-content").append( '<hr>' );
        }
    )
}	