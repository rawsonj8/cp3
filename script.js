


//    document.getElementById("getQuote").addEventListener('click', function(e) {
  //  e.preventDefault();
   // const url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback"
   // fetch(url)
    //  .then(function(response) {
//	      console.log(response.text());
//	      return response.json();
  //    }).then(function(json) {
   //     console.log(jsonp)
    //    let results = "<h5>";
     //   results += json.content + "</h5><p> By " + json.title + "</p>"
      //  document.getElementById("quotes").innerHTML = results;
     // });
   // });
//
//document.getElementById("getQuote").addEventListener('click', function(e){
//$('#getQuote').on('click', function(e){
//	e.preventDefault();
$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a){
	let results = "<h5>";
	results+= a[0].content + "</h5><p> By " + a[0].title + "</p>";
	document.getElementById("quotes").innerHTML = results;
	//$("body").append(a[0].content + "<p>- " + a[0].title + "</p>")
});


