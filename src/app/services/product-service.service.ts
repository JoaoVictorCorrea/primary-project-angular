import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://the-cocktail-db.p.rapidapi.com/search.php';

  constructor(
    private httpClient: HttpClient
  ) { }

  fecthData(search: string): Observable<any> {

    const options = {
      params: new HttpParams().set('s', search),
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'dd506fe580mshdebc4a736492853p118e04jsna51f66eeb566',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      })
    };
    
    return this.httpClient.get(this.apiUrl, options);
  }
}
