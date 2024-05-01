import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private recipeService: RecipeService) { }

  onSearch(term: string): void {
    this.recipeService.searchRecipes(term);
  }
}
