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

          var item = $("<div></div>");
          var div1 = $("<div>").addClass("vote-section");
          div1.append("<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-up-arrow'></span></button>");
          div1.append("<div></div>").text(upCount);
          div1.append("<button type='button' class='btn btn-default'><span class='glyphicon glyphicon-down-arrow'></span></button>");

          var image = $("<a href="+ post.data.thumbnail +"></a>").addClass("thumbnail");
          var div3 = $("<div>").addClass("post-details");
          div3.append("<div></div>").text(post.data.title);
          div3.append("<div>").text("to " + post.data.subreddit);
          div3.append("<div>").text(post.data.num_comments)
          item.append(div1,image,div3);
          $("#reddit-content").append(item);
          
        }
    )
}	