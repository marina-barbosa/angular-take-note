import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { IndexComponent } from "../../components/index/index.component";
import { ShowComponent } from "../../components/show/show.component";
import { ExportService } from '../../services/export.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [HeaderComponent, ButtonComponent, FooterComponent, IndexComponent, ShowComponent, HttpClientModule],
    providers: [ExportService]
})
export class MainComponent {
  constructor(private exportService: ExportService) { }

  onExport(type: string): void {
    switch (type) {
      case 'xls':
        this.exportService.exportXls();
        break;
      case 'txt':
        this.exportService.exportTxt();
        break;
      case 'csv':
        this.exportService.exportCsv();
        break;
      default:
        console.error('Tipo de exportação inválido.');
    }
  }

}
