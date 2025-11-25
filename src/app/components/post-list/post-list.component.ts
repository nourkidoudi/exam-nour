import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // Choisis getPostsLocal() ou getPostsFromServer()
    this.postService.getPostsLocal().subscribe(p => this.posts = p);
    // ou this.postService.getPostsFromServer().subscribe(p => this.posts = p);
  }
}