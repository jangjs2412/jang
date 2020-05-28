<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!-- 	
	//taglib : 태그 라이브러리 사용 지시자
	//태그를 통해 프로그램을 실행한다.
	//prefix : 태그 구분자
	//uri : 태그를 정의하고 있는 프로그램 파일
-->
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<hr>스트럿츠 2 실습<hr>
<b><i>회원 로그인 자료</i></b>
<hr>
<h1><s:property value="name"/></h1>
<hr>
<h1><s:property value="pass"/></h1>
</body>
</html>