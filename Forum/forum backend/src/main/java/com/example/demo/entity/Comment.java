package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name="Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name="postId")
    private Post post;
    private String description;
    private Long replyTo;

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getReplyTo() {
        return replyTo;
    }

    public void setReplyTo(Long replyTo) {
        this.replyTo = replyTo;
    }
}
