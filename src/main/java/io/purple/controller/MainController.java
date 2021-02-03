package io.purple.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
	@RequestMapping("/oEmbedTest")
	public String main() {
		System.out.println("main");
		
		return "oEmbedMain";
	}
	
	// 카테고리 리스트
	@ResponseBody
	@RequestMapping("/oembed")
	public String adminCateList(@RequestParam("oEmbedUrl") String oEmbedUrl) {

		System.out.println("oEmbedInfo");
		System.out.println(oEmbedUrl);
		

		return "";
	}
}
