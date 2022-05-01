import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  
  private jsonUrl: string =
    'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

  constructor(private http: HttpClient) { }

  getCoffeeList(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.jsonUrl);
  }
}
