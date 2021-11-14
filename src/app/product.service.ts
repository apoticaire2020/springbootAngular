import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiServerUrl = '';

  constructor(private http:HttpClient) { }


  public getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('${this.apiServerUrl}/products/all');
  }
  public addProduct(prod:Product): Observable<Product>{
    return this.http.post<Product>('${this.apiServerUrl}/products/add',prod);
  }
  public updateProduct(prod:Product): Observable<Product>{
    return this.http.put<Product>('${this.apiServerUrl}/products/update',prod);
  }
  public deleteProduct(prodid:number): Observable<void>{
    return this.http.delete<void>('${this.apiServerUrl}/products/delete/${prodid}');
  }
}
