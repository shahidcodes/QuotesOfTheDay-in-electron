$(function() {
    var qod = $("#qod")
    $.ajaxSetup({ cache: false });
    function setWaitSpinner() {
    	qod.html("Fetching ..<div class=\"progress\"><div class=\"indeterminate\"></div></div>")
    }
    setWaitSpinner()
    var refreshBtn = $("#refresh")
    refreshBtn.on("click", refresh)
    var qUrl = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
    function refresh() {
    	setWaitSpinner()
    	$.get(qUrl, function(data, status) {
    		console.log(data, status)
    		qod.html(data[0]["content"] + " <i>By: " + data[0]["title"]+"</i>")
    	});	
    }
    refresh()
});