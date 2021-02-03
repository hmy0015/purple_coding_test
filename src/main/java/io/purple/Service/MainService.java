package io.purple.Service;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.nmote.oembed.DefaultOEmbedProvider;
import com.nmote.oembed.OEmbed;
import com.nmote.oembed.OEmbedProvider;

@Service
public class MainService {
	public OEmbed getOEmbed(String url) {
		System.out.println("service");
		
		// 각 url을 사이트 별로 구분하여 endpoint를 임의적으로 부여
		if(url.contains("youtube")) {
			System.out.println("youtube");
			url = "https://www.youtube.com/oembed?url=" + url;
			}
		else if(url.contains("twitter")) {
			System.out.println("twitter");
			url = "https://publish.twitter.com/oembed?url=" + url;
		}
		else if(url.contains("instagram")) {
			System.out.println("instagram");
			url = "https://graph.facebook.com/v9.0/instagram_oembed?url=" + url;
		}
		else if(url.contains("vimeo")) {
			System.out.println("vimeo");
			url = "https://vimeo.com/api/oembed.json?url=" + url;
		}
		
		// oEmbed 정보 담기
		OEmbedProvider ep;
		OEmbed e = null;
		
		try {
			ep = new DefaultOEmbedProvider();
			e = ep.resolve(url);
		} catch (IOException error) {
			// TODO: handle exception
			error.printStackTrace();
		}
		
		return e;
	}
}
