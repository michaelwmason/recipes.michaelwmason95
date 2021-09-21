import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';

@Injectable()
export class RecipeService {
  constructor(private httpClient: HttpClient) {}

  getSuggestedRecipes(): Observable<Recipe[]> {
    return of([
      new Recipe('Foo1', 'description', 45, 'cook the things', []),
      new Recipe('Foo2', 'description', 45, 'cook the things', []),
      new Recipe('Foo3', 'description', 45, 'cook the things', []),
      new Recipe('Foo4', 'description', 45, 'cook the things', []),
      new Recipe('Foo5', 'description', 45, 'cook the things', []),
    ]);
  }
}
