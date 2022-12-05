import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  enviaParaLocalStorage(data: any){
    sessionStorage.setItem('data', JSON.stringify(data));
  }
}
