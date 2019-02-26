import { Observable, of } from 'rxjs';
import { HistoryDataModel } from '../../models/history-data.model';

export abstract class ExcelService {
  abstract sortByFullname(): void;
  abstract sortByCount(): void;
  abstract sendPresentationStatsToExcel(historyData: Array<HistoryDataModel>): void;
  abstract createChart(): void;
}

