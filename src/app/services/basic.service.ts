import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasicServiceService {
  constructor() {}
  getUserName() {
    return 'Dhrumi ';
  }
}
