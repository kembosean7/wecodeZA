package com.wecodeZA.backend.Posts;

import com.wecodeZA.backend.User.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    public PostService(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    @Autowired
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public void savePost(Post post){
        postRepository.save(post);
    }
//
//    public Post getPostbyId(Long postId){
//        return postRepository.findById(postId).orElseThrow(() -> new IllegalStateException("Post with ID " + postId + " not found"));
//    }

    public List<Post> getAllPost(){
        return postRepository.findAll();
    }


//    public void deletePost(Long postId) {
//
//        boolean exist = postRepository.existsById(postId);
//        if(!exist){
//            throw new IllegalStateException("Post with ID: " + postId + " does not exist");
//        }
//
//        postRepository.deleteById(postId);
//    }

    public Post createPost(Long userId, String title, String topic, String context) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalStateException("User not found"));
        Post post = new Post(user, title, topic, context);
        return postRepository.save(post);
    }


}
