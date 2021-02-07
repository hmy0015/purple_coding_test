package io.purple.notessentialtest;

public class Ex01 {
	public static void main(String[] args) {
		String str = "Abracadabra"; // 임의의 글자 입력
		System.out.println(vowels(str)); // 모음 개수 구해주는 메소드 호출
	}
	
	// 모음 구분해주는 메소드
	public static int vowels(String str) {
		String regVowels = "[^aeiou]"; // 정규표현식으로 모음 담기 -> a,e,i,o,u가 아닌 글자를 구분
		
		String vowels = str.toLowerCase().replaceAll(regVowels, ""); // 입력받은 문자를 모두 소문자로 치환한 후, 모음이 아닌 글자(자음)는 제거 함 
		
		return vowels.length(); // 자음이 제거된 글자의 길이(=모음의 개수)를 리턴
	}
}
