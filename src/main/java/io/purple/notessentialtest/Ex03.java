package io.purple.notessentialtest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

public class Ex03 {
	public static void main(String[] args) {
		String names[] = {"Ryan", "Kieran", "Mark", "Roy"}; // 임의의 글자 입력
		System.out.println(friend(names)); // 4글자의 이름을 가진 친구를 찾는 메소드 호출
	}
	
	// 4글자의 이름을 가진 친구를 찾는 메소드
	public static String friend(String[] names) {
		ArrayList<String> list = new ArrayList<>(Arrays.asList(names)); // 친구 이름을 담아줄 리스트 만들어서 값 담기
		
		// filter(t->t.length()<5) : 글자수가 5글자 미만인 텍스트, Collectors.joining(", ") : 콤마를 넣어 문자열 결합
		return list.stream().filter(t->t.length()<5).collect(Collectors.joining(", ")); // 4글자의 이름을 가진 친구 이름을 리턴
	}
}
