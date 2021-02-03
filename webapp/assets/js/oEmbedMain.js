var url = window.location.pathname.substring(0,window.location.pathname.indexOf("/",2));

$(".btn-warning").on("click", function(){
	console.log("확인 클릭");
	var sUrl = $("#oEmbedTest-SearchUrl").val().replace(/ /gi, ""); // url 공백제거
	var oEmbedUrl = "https://youtube.com/oembed?url="+sUrl;
	console.log(sUrl + ", " + oEmbedUrl);
	
	$.ajax({
		url : url+"/oembed",
		type : "post",
		data : { oEmbedUrl: oEmbedUrl },
		dataType : "json",
		success : function(result) { /*성공시 처리해야될 코드 작성*/
		
			
		},
		error : function(XHR, status, error) {
			console.error(status + " : " + error);
		}
	});
	
})