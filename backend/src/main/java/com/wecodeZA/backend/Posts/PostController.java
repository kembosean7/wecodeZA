package com.wecodeZA.backend.Posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/wecode/posts")
public class PostController {

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @Autowired
    private final PostService postService;


    @GetMapping()
    public List<Post> getAllPosts(){
        return  postService.getAllPost();
    }

//    @GetMapping("/{id}")
//    public Post getPostById(@PathVariable Long id){
//        return postService.getPostbyId(id);
//    }
    @PostMapping
    public Post createPost(@RequestParam Long userId,
                           @RequestParam String title,
                           @RequestParam String topic,
                           @RequestParam String context) {
        return postService.createPost(userId, title, topic, context);
    }


}
