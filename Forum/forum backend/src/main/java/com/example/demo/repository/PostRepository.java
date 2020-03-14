package com.example.demo.repository;

import com.example.demo.entity.Post;
import com.example.demo.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    public List<Post> findByTopic(Topic topic);
    public Post findByTitle(String title);
}
