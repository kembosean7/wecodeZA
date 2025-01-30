package com.wecodeZA.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@GetMapping
	public List<UserEntity> users(){
		return List.of(
				new UserEntity(
						1L,
						"sekembojhb024@student.wethinkcode",
						"Kembo",
						"Sean"
				),
				new UserEntity(
						2L,
						"jclaudhjbh024@student.wethinkcode",
						"Kumm",
						"Jean-Claud"
				)

		);
	}

}
