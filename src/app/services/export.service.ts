import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  url = 'https://takenotemxm.azurewebsites.net/v1/export/';

  constructor(private http: HttpClient) { }

  exportTxt(): void {
    this.http.get(this.url + 'txt', { responseType: 'text' })
      .subscribe((data: string) => {
        this.downloadFile(data, 'text/plain', 'registro.txt');
      });
  }

  exportCsv(): void {
    this.http.get(this.url + 'csv', { responseType: 'text' })
      .subscribe((data: string) => {
        this.downloadFile(data, 'text/csv', 'registro.csv');
      });
  }

  exportXls(): void {
    this.http.get(this.url + 'xls', { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        this.downloadFile(data, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'LogEntrys.xlsx');
      });
  }

  private downloadFile(data: any, type: string, filename: string): void {
    const blob = new Blob([data], { type: type });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    window.URL.revokeObjectURL(url);
  }
}
