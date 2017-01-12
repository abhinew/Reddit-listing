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
	console.log(data);
	$.each(
        data.data.children.slice(0, 10),
        function (i, post) {
        	if (post.data.ups > 10000) 
        	{
        		var upCount = (post.data.ups / 1000).toFixed(1);
        		
        	}
        	else 
        	{
  				upCount = post.data.ups;
        	}
          $("#reddit-content").append( '<img class="pics" src='+ post.data.thumbnail+'>');
          $("#reddit-content").append( '<br>' + post.data.title);
          $("#reddit-content").append( '<br> to /r/' + post.data.subreddit);
          $("#reddit-content").append( '<br>' + post.data.num_comments + ' comments');
          
          $("#reddit-content").append( '<br>' + post.data.downs );
          
          $("#reddit-content").append( '<hr>' );
        }
    )
}	