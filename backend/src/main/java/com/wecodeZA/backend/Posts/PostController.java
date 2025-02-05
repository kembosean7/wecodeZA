package com.wecodeZA.backend.Posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/wecode/posts")
public class PostController {

    @Autowired
    private PostService postService;


    @GetMapping()
    public List<Post> getPosts(){
        return  postService.getAllPost();
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable Long id){
        return postService.getPostbyId(id);
    }



}
