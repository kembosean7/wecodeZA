package com.wecodeZA.backend.Posts;


import com.wecodeZA.backend.User.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties({"name", "lastname", "username", "email", "profession", "bio"})
    private User user;

    @Column(nullable = false, length = 255)
    private  String title;

    @Column(nullable = false, length = 100)
    private String topic;

    @Column(columnDefinition = "TEXT", nullable = false)
    private  String context;

    @Column(name = "date_created", nullable = false)
    private LocalDateTime dateCreated;



    public Post() {
        this.dateCreated = LocalDateTime.now();
    }


    public Post(User user, String title, String topic, String context) {
        this.user = user;
        this.title = title;
        this.topic = topic;
        this.context = context;
        this.dateCreated = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser() {
        return user != null ? user.getId() : null;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", user_id=" + user +
                ", title='" + title + '\'' +
                ", topic='" + topic + '\'' +
                ", context='" + context + '\'' +
                ", dateCreated=" + dateCreated +
                '}';
    }
}


