import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UploadArquivoService {
  constructor(private http: HttpClient) {}

  public upload(files: Set<File>, url: string) {
    const formData = new FormData();
    files.forEach((file) => formData.append('file', file, file.name));

    const request = new HttpRequest('POST', url, formData);
    return this.http.request(request);
  }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'http://localhost:8080/produtosControle/uploadImagens';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData).pipe(
      map(() => {
        return true;
      })
    );
  }
}
