<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<center>
	<h1>회 원 정 보</h1>
	<form action="join/join.action" name="join" method="post">
		아 이 디 : <s:textfield name="id" size="10" maxlength="8"></s:textfield>
		이 름 : <s:textfield name="name" size="8" maxlength="6"></s:textfield>
		전 화 번 호 : <s:textfield name="tel" size="17" maxlength="15"></s:textfield>
		<input type="submit" value=" 회 원 가 입 ">
		<input type="reset" value=" 취 소">
	</form>
</center>

</body>
</html>