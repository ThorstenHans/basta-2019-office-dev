import { Observable, of } from 'rxjs';
import { ExcelService } from './excel.service';
import { HistoryDataModel } from '../../models/history-data.model';

export class NoExcelService extends ExcelService {
  createChart(): void {
  }

  sendPresentationStatsToExcel(historyData: Array<HistoryDataModel>): void {
  }

  sortByCount(): void {
  }

  sortByFullname(): void {
  }

}
