package com.wecodeZA.backend.User;


import jakarta.persistence.*;

@Entity
public class UserEntity {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 50, nullable = false)
    private String lastname;

    @Column(length = 50, nullable = false)
    private String username;

    @Column(length = 50, nullable = false)
    private String email;


    public UserEntity(){

    }

    public UserEntity(Long id, String email, String lastname,String username, String name) {
        this.id = id;
        this.email = email;
        this.lastname = lastname;
        this.name = name;
        this.username = username;
    }

    public UserEntity(String name, String lastname, String username, String email) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    @Override
    public String toString() {
        return "UserEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                '}';
    }


}
