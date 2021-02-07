package io.purple.essentialtest;

import java.util.stream.IntStream;

public class Ex02 {
	public static int count = 0; // anyMatch의 비교값으로 동적 변수를 사용할 수 없기 때문에 정적 변수를 선언하여 사용
	
	public static void main(String[] args) {
		int num[] = { 0, 1, 1, 2, 3, 5, 2, 7, 4, 5, 5, 6 }; // 임의의 배열 선언
		System.out.println(smallestUnusedNum(num));
	}

	public static int smallestUnusedNum(int[] num) {
		for(count = 0; count < num.length; count++) { // 0부터 증가하는 count의 값이 배열 내에 존재하는지 검사하기 위한 반복문
        	if(!IntStream.of(num).anyMatch(x -> x == count)) { // * IntSream 클래스의 경우 Java8 이상에서만 실행 가능
        		break; // 배열 내 count가 포함되지 않을 경우 반복문 종료, 포함될 경우 count++
	        }
        }
		return count; // count 리턴
	}
}
