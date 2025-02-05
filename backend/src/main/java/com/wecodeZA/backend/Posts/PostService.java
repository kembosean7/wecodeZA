package com.wecodeZA.backend.Posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public void savePost(Post post){
        postRepository.save(post);
    }

    public Post getPostbyId(Long postId){
        return postRepository.findById(postId).orElseThrow(() -> new IllegalStateException("Post with ID " + postId + " not found"));
    }

    public List<Post> getAllPost(){
        return postRepository.findAll();
    }


    public void deletePost(Long postId) {

        boolean exist = postRepository.existsById(postId);
        if(!exist){
            throw new IllegalStateException("Post with ID: " + postId + " does not exist");
        }

        postRepository.deleteById(postId);
    }




}
