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


    @PostMapping
    public Post createPost(@RequestParam Long userId,
                           @RequestParam String title,
                           @RequestParam String topic,
                           @RequestParam String context) {
        return postService.createPost(userId, title, topic, context);
    }

    @DeleteMapping(path = "{id}")
    public void deleteUser(@PathVariable("id") Long id){

        postService.deletePost(id);
    }



}
