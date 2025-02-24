package com.wecodeZA.backend.Posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/wecode")
public class PostController {

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @Autowired
    private final PostService postService;


    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        return  postService.getAllPost();
    }

    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable Long id){
        return postService.getPostbyId(id);
    }

    @GetMapping("/posts/user/{userId}")
    public List<Post> getPostByUserId(@PathVariable Long userId){
        return postService.getPostsByUserId(userId);
    }

    @PostMapping("posts/creatpost")
    public ResponseEntity<String> createPost(@RequestBody Post post) {
        postService.createPost(post.getId(), post.getTitle(), post.getTopic(), post.getContext());
        return ResponseEntity.ok("Post successfully posted");
    }





}
