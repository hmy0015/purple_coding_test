<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>oEmbedTest</title>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/assets/css/oEmbedMain.css">

    <script src="${pageContext.request.contextPath}/assets/js/jquery-3.5.1.min.js" type="text/javascript"></script>
    <script src="https://kit.fontawesome.com/ff5ee53d46.js" crossorigin="anonymous"></script>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	
  </head>
  <body>
  	<section id="oEmbedTest-headSection">
  		<div class="oEmbedTest-head-Container">
  			<div class="oEmbedTest-head-titleContainer">
  				<p class="title">oEmbed Test</p>
			</div>
  			<div class="oEmbedTest-head-SearchContainer">
  				<div class="oEmbedTest-head-SearchBoxContainer">
  					<i class="fas fa-unlink"></i>
  					<input type="text" id="oEmbedTest-SearchUrl">
  					<button type="button" class="btn btn-warning">확인</button>
  				</div>
  			</div>
  		</div>
  	</section>
  	
  	<section id="oEmbedTest-viewSection">
  		<div class="oEmbedTest-view-Container">
  			<div class="oEmbedTest-view-infoAndContentContainer">
	  			<div class="oEmbedTest-view-infoContainer">
	  				<div class="oEmbedTest-view-infoContentContainer" style="padding: 30px 50px;">
	  					<table class="oEmbedTest-view-infoTable">
	  						<thead>
		  						<tr>
		  							<td>title</td>
		  							<td class="infoTable-title">A Time Artifact - work in progress</td>
		  						</tr>
	  						</thead>
	  						
	  						<tbody>
		  						<tr>
		  							<td>type</td>
		  							<td>video</td>
		  						</tr>
		  						<tr>
		  							<td>version</td>
		  							<td>1.0</td>
		  						</tr>
		  						<tr>
		  							<td>provider_name</td>
		  							<td>Vimeo</td>
		  						</tr>
		  						<tr>
		  							<td>provider_url</td>
		  							<td>https://vimeo.com</td>
		  						</tr>
		  						<tr>
		  							<td>author_name</td>
		  							<td>Depict_tk</td>
		  						</tr>
		  						<tr>
		  							<td>author_url</td>
		  							<td>https://vimeo.com/user5346842</td>
		  						</tr>
		  						<tr>
		  							<td>is_plus</td>
		  							<td>0</td>
		  						</tr>
		  						<tr>
		  							<td>html<br>(640/480)</td>
		  							<td>
		  								<xmp style="white-space:pre-wrap;">
		  									<iframe width="640" height="480" src="" allowfullscreen></iframe>
										</xmp><br>
		  								<iframe width="640" height="480" src="https://www.youtube.com/embed/xVjTx8fULZY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		  								<br>
		  								ㅇㅇ
									</td>
		  						</tr>
		  						<tr>
		  							<td>width</td>
		  							<td>640</td>
		  						</tr>
		  						<tr>
		  							<td>height</td>
		  							<td>480</td>
		  						</tr>
		  						<tr>
		  							<td>duration</td>
		  							<td>314</td>
		  						</tr>
		  						<tr>
		  							<td>discription</td>
		  							<td>org.springframework.web.servlet.DispatcherServlet initServletBean</td>
		  						</tr>
		  						<tr>
		  							<td>thumnail_url<br>(640/480)</td>
		  							<td>
		  								<xmp>http://img.jpg</xmp>
		  								<img src="">
		  							</td>
		  						</tr>
		  						<tr>
		  							<td>thumnail_width</td>
		  							<td>640</td>
		  						</tr>
		  						<tr>
		  							<td>thumnail_height</td>
		  							<td>480</td>
		  						</tr>
		  						<tr>
		  							<td>thumnail_url_with_play_button</td>
		  							<td>https://vimeo.com</td>
		  						</tr>
		  						<tr>
		  							<td>upload_date</td>
		  							<td>2011-02-18 05:30:31</td>
		  						</tr>
		  						<tr>
		  							<td>video_id</td>
		  							<td>20097051</td>
		  						</tr>
		  						<tr>
		  							<td>url</td>
		  							<td>/videos/20097051</td>
		  						</tr>
	  						</tbody>
	  					</table>
	  				</div>
	  			</div>
  			</div>
  		</div>
  	</section>
  </body>
  <script src="${pageContext.request.contextPath}/assets/js/oEmbedMain.js" type="text/javascript"></script>
</html>
