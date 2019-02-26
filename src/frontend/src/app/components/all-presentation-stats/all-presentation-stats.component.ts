import { Component, OnInit } from '@angular/core';
import { HistoryDataService } from '../../services/history-data.service';
import { HistoryDataModel } from '../../models/history-data.model';
import { ExcelService } from '../../services/excel/excel.service';

@Component({
  selector: 'tt-app-all-presentation-stats',
  templateUrl: './all-presentation-stats.component.html',
})
export class AllPresentationStatsComponent implements OnInit {

  public historyData: Array<HistoryDataModel> = [];

  constructor(private readonly _excelService: ExcelService, private readonly _historyDataService: HistoryDataService) {

  }

  public sendToExcel() {
    this._excelService.sendPresentationStatsToExcel(this.historyData);
  }

  public createChart() {
    this._excelService.createChart();
  }

  public sortByFullname() {
    this._excelService.sortByFullname();
  }

  public sortBySessions() {
    this._excelService.sortByCount();
  }

  public ngOnInit() {
    this._historyDataService.getHistoryData()
      .subscribe(data => this.historyData = data);
  }

}
