import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Liste locale (pour l'exercice)
  postList: Post[] = [
    { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
    { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
    { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' },
  ];

  // Si tu veux utiliser l'API backend (voir Partie II)
  apiUrl = '/postList'; // relative, Node servira cette route

  constructor(private http: HttpClient) { }

  // Utilisation locale (slide de test)
  getPostsLocal(): Observable<Post[]> {
    return of(this.postList);
  }

  // Appel HTTP vers le backend
  getPostsFromServer(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
