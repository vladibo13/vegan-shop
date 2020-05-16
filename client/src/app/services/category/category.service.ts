import { Injectable } from "@angular/core";
import { Category } from "src/app/models/category";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private localDevUrl = "http://localhost:5000/";
  private categoryURL = `${this.localDevUrl}api/category`;
  categories: Category;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category> {
    // return this.http.get<Category>(this.categoryURL).pipe(map((c: Category) => (this.categories = c)));
    return this.http.get<Category>(this.categoryURL);
  }
}
