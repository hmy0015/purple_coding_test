package io.purple.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nmote.oembed.OEmbed;

import io.purple.Service.MainService;

@Controller
public class MainController {
	@Autowired
	private MainService oEmbedService;
	
	@RequestMapping("/oEmbedTest")
	public String main() {
		System.out.println("main");
		
		return "oEmbedMain";
	}
	
	// 카테고리 리스트
	@ResponseBody
	@RequestMapping("/search")
	public OEmbed adminCateList(@RequestParam("searchUrl") String searchUrl) {

		System.out.println("controller");
		System.out.println(searchUrl);
		
		return oEmbedService.getOEmbed(searchUrl);
	}
}