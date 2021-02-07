package io.purple.notessentialtest;

public class Ex02 {
	public static void main(String[] args) {
		int num[] = { 5,1,2 }; // 임의의 배열 선언
		System.out.println(middleNumSearch(num)); // 중간 숫자의 위치 찾기 메소드 호출
	}
	
	// 중간 숫자의 위치 찾기 메소드
	public static int middleNumSearch(int[] num) {
		int a = num[0], b = num[1], c = num[2]; // 배열 안의 숫자를 각 변수에 하나씩 담아줌
		
		// 두번째로 큰 값 구하기
		if((a >= b && a <= c) || (a <= b && a >= c)) { // 첫 번째 index 값이 중간값인 경우
			return 0;
        } else if((b >= a && b <= c) || (b <= a && b >= c)) { // 두 번째 index 값이 중간값인 경우
        	return 1;
        } else { // 마지막 index 값이 중간값인 경우
        	return 2;
        }
	}
}
