package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name="Post")
public class Post {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name="topicId")
    private Topic topic;

    private String title;
    private String description;
    private boolean isLocked;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isLocked() {
        return isLocked;
    }

    public void setLocked(boolean locked) {
        isLocked = locked;
    }
}
