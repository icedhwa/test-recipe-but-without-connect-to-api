import {HttpClient} from '@angular/common/http';

export class AppComponent implements OnInit {
  recipes: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.http.get('http://localhost:8081/repository/maven-releases/com/example/diabetes-api/maven-metadata.xml')
      .subscribe(response => this.recipes = response);
  }
}