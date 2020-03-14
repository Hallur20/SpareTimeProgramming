package com.example.demo.controller;

import com.example.demo.entity.Post;
import com.example.demo.entity.Topic;
import com.example.demo.repository.PostRepository;
import com.example.demo.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/posts")
public class PostController {
    private PostRepository postRepository;
    private TopicRepository topicRepository;

    @Autowired
    public PostController(PostRepository postRepository, TopicRepository topicRepository) {
        this.postRepository = postRepository;
        this.topicRepository = topicRepository;
    }

    @GetMapping("/all")
    public List<Post> findAllPosts(){
        return postRepository.findAll();
    }

    @CrossOrigin(origins = "${frontend}")
    @GetMapping("/topic/{topicName}")
    public List<Post> findPostsByTopic(@PathVariable String topicName){
        Topic topicByTile = topicRepository.findByTitle(topicName);
        System.out.println(topicByTile.getTitle());
        return postRepository.findByTopic(topicByTile);
    }

    @CrossOrigin(origins = "${frontend}")
    @GetMapping("/title/{title}")
    public Post findPostByTitle(@PathVariable String title){
        return postRepository.findByTitle(title);
    }
}
