import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:8081/repository/maven-releases/com/example/diabetes-api/maven-metadata.xml'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  searchRecipes(term: string) {
    return this.http.get(`${this.apiUrl}?search=${term}`);
  }
}
