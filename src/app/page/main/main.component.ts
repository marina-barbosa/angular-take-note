import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ExportService } from '../../services/export.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from "../../components/notes/notes.component";

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [ExportService],
  imports: [HeaderComponent, ButtonComponent, FooterComponent, HttpClientModule, NotesComponent]
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
