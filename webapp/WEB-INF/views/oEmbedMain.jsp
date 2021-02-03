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
	  						<thead class="oEmbedTest-view-infoTable-thead">
		  						
	  						</thead>
	  						
	  						<tbody class="oEmbedTest-view-infoTable-tbody">
		  						
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
