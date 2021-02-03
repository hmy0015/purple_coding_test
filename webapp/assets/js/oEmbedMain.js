var url = window.location.pathname.substring(0,window.location.pathname.indexOf("/",2));


$(document).ready(function(){
	var searchUrl = "https://www.youtube.com/watch?v=emfDIIctH9Y";
	
	$.ajax({
		url : url+"/search",
		type : "post",
		data : { searchUrl: searchUrl },
		dataType : "json",
		success : function(result) { /*성공시 처리해야될 코드 작성*/
			console.log(result);
			$(".oEmbedTest-view-infoTable-thead > tr").remove();
			$(".oEmbedTest-view-infoTable-tbody > tr").remove();

			var str = '';
			
			str += '<tr>';
			str += '	<td>title</td>';
			str += '	<td class="infoTable-title">' + result.title + '</td>';
			str += '</tr>';
			$(".oEmbedTest-view-infoTable-thead").append(str);
			

			str = '';
			
			str += '<tr>';
			str += '	<td>type</td>';
			str += '	<td>' + result.type + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>version</td>';
			str += '	<td>' + result.version + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>provider_name</td>';
			str += '	<td>' + result.provider_name + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>provider_url</td>';
			str += '	<td>' + result.provider_url + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>author_name</td>';
			str += '	<td>' + result.author_name + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>author_url</td>';
			str += '	<td>' + result.author_url + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>is_plus</td>';
			str += '	<td>' + result.is_plus + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>html<br>(' + result.width + '/' + result.height + ')</td>';
			str += '	<td>';
			str += '		<xmp style="white-space:pre-wrap;">';
			str += 				result.html;
			str += '		</xmp><br>';
			str += 			result.html;
			str += '	</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>width</td>';
			str += '	<td>' + result.width + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>height</td>';
			str += '	<td>' + result.height + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>duration</td>';
			str += '	<td>' + result.duration + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>discription</td>';
			str += '	<td>' + result.discription + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>thumbnail_url<br>(' + result.thumbnail_width + '/' + result.thumbnail_height + ')</td>';
			str += '	<td>' + result.thumbnail_url + '<br><br>';
			str += '	<img src="' + result.thumbnail_url + '"></td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>thumbnail_width</td>';
			str += '	<td>' + result.thumbnail_width + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>thumbnail_height</td>';
			str += '	<td>' + result.thumbnail_height + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>thumbnail_url_with_play_button</td>';
			str += '	<td>' + result.thumbnail_url_with_play_button + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>upload_date</td>';
			str += '	<td>' + result.upload_date + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>video_id</td>';
			str += '	<td>' + result.video_id + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>url</td>';
			str += '	<td>' + result.url + '</td>';
			str += '</tr>';
			
			$(".oEmbedTest-view-infoTable-tbody").append(str);
			
			
		},
		error : function(XHR, status, error) {
			console.error(status + " : " + error);
		}
	});
})

$(".btn-warning").on("click", function(){
	console.log("확인 클릭");
	var searchUrl = $("#oEmbedTest-SearchUrl").val().replace(/ /gi, ""); // url 공백제거
	
	$.ajax({
		url : url+"/search",
		type : "post",
		data : { searchUrl: searchUrl },
		dataType : "json",
		success : function(result) { /*성공시 처리해야될 코드 작성*/
			console.log(result);
			$(".oEmbedTest-view-infoTable-thead > tr").remove();
			$(".oEmbedTest-view-infoTable-tbody > tr").remove();

			var str = '';
			
			str += '<tr>';
			str += '	<td>title</td>';
			str += '	<td class="infoTable-title">' + result.title + '</td>';
			str += '</tr>';
			$(".oEmbedTest-view-infoTable-thead").append(str);
			

			str = '';
			
			str += '<tr>';
			str += '	<td>type</td>';
			str += '	<td>' + result.type + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>version</td>';
			str += '	<td>' + result.version + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>provider_name</td>';
			str += '	<td>' + result.provider_name + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>provider_url</td>';
			str += '	<td>' + result.provider_url + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>author_name</td>';
			str += '	<td>' + result.author_name + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>author_url</td>';
			str += '	<td>' + result.author_url + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>is_plus</td>';
			str += '	<td>' + result.is_plus + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>html<br>(' + result.width + '/' + result.height + ')</td>';
			str += '	<td>';
			str += '		<xmp style="white-space:pre-wrap;">';
			str += 				result.html;
			str += '		</xmp><br>';
			str += 			result.html;
			str += '	</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>width</td>';
			str += '	<td>' + result.width + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>height</td>';
			str += '	<td>' + result.height + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>duration</td>';
			str += '	<td>' + result.duration + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>discription</td>';
			str += '	<td>' + result.discription + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>thumbnail_url<br>(' + result.thumbnail_width + '/' + result.thumbnail_height + ')</td>';
			str += '	<td>' + result.thumbnail_url + '<br><br>';
			str += '	<img src="' + result.thumbnail_url + '"></td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>thumbnail_width</td>';
			str += '	<td>' + result.thumbnail_width + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>thumbnail_height</td>';
			str += '	<td>' + result.thumbnail_height + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>thumbnail_url_with_play_button</td>';
			str += '	<td>' + result.thumbnail_url_with_play_button + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>upload_date</td>';
			str += '	<td>' + result.upload_date + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>video_id</td>';
			str += '	<td>' + result.video_id + '</td>';
			str += '</tr>';
			
			str += '<tr>';
			str += '	<td>url</td>';
			str += '	<td>' + result.url + '</td>';
			str += '</tr>';
			
			$(".oEmbedTest-view-infoTable-tbody").append(str);
			
			
		},
		error : function(XHR, status, error) {
			console.error(status + " : " + error);
		}
	});
	
})