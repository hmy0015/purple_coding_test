package io.purple.notessentialtest;

public class Ex02 {
	public static void main(String[] args) {
		int num[] = { 0,1,2 }; // 임의의 배열 선언
		System.out.println(middleNumSearch(num)); // 중간 숫자의 위치 찾기 메소드 호출
	}
	
	// 중간 숫자의 위치 찾기 메소드
	public static int middleNumSearch(int[] num) {
		int middleNumIndex = 0; // 중간 숫차의 위치를 담아줄 변수
		int middleNum; // 중간 숫자의 값을 담아줄 변수
		int a = num[0], b = num[1], c = num[2]; // 배열 안의 숫자를 각 변수에 하나씩 담아줌
		
		// 두번째로 큰 값 구하기
		if((a >= b && a <= c) || (a >= c && a <= b)) {
			middleNum = a;
        } else if((b >= a && b <= c) || (b >= c && b <= a)) {
        	middleNum = b;
        } else {
        	middleNum = c;
        }

		// 반복문을 돌려서 중간 숫자와 일치하는 배열의 위치를 변수에 담기
		for(int i = 0; i < num.length; i++) {
			if(num[i] == middleNum) {
				middleNumIndex = i;
			}
		}
		
		return middleNumIndex;
	}
}
