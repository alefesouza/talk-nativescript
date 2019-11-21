import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) { }

  getLanguages() {
    return this.http.get('https://alefesouza.dev/api/languages.php')
  }
}
