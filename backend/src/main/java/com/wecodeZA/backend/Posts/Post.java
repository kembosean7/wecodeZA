package com.wecodeZA.backend.Posts;


import com.wecodeZA.backend.User.User;
import jakarta.persistence.*;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


    private  String title;

    private String topic;

    private  String context;

    private String dataCreated;










}
