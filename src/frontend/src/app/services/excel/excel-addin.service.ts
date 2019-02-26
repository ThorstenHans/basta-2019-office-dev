import { ExcelService } from './excel.service';
import { HistoryDataModel } from '../../models/history-data.model';

export class ExcelAddinService extends ExcelService {

  private readonly _dataWorksheetName = 'History Data';
  private readonly _dataTableName = 'HistoryData';

  public sortByFullname(): void {
    Excel.run(async ctx => {
      const worksheetName = this._dataWorksheetName;
      const currenciesWorksheet = ctx.workbook.worksheets.getItem(worksheetName);
      const table = currenciesWorksheet.tables.getItemAt(0);
      table.sort.apply([{key: 0, ascending: true}]);
      await ctx.sync();
    }).catch(err => (console.log(err)));
  }

  public sortByCount(): void {
    Excel.run(async ctx => {
      const worksheetName = this._dataWorksheetName;
      const currenciesWorksheet = ctx.workbook.worksheets.getItem(worksheetName);
      const table = currenciesWorksheet.tables.getItemAt(0);
      table.sort.apply([{key: 4, ascending: false}]);
      await ctx.sync();
    }).catch(err => (console.error(err)));
  }

  public sendPresentationStatsToExcel(historyData: Array<HistoryDataModel>): void {
    Excel.run(async ctx => {
      const worksheetName = this._dataWorksheetName;
      const existing = ctx.workbook.worksheets.getItemOrNullObject(worksheetName);
      if (existing) {
        existing.delete();
      }

      const currenciesWorksheet = ctx.workbook.worksheets.add(worksheetName);
      const currenciesTable = currenciesWorksheet.tables.add('A1:E1', true);
      currenciesTable.name = this._dataTableName;

      currenciesTable.getHeaderRowRange().values = [['Fullname', 'Initials', 'Year', 'Topic', 'Nr of Sessions']];
      const data: Array<any> = historyData.map(d => [d.fullName, d.initials, d.year, d.topic, d.count]);

      currenciesTable.rows.add(null, data);
      currenciesTable.getRange().format.autofitColumns();
      currenciesTable.getRange().format.autofitRows();
      await ctx.sync();
    }).catch(err => {
      console.error(err);
    });
  }

  public createChart() {

    Excel.run(async ctx => {
      const currentWorksheet = ctx.workbook.worksheets.getActiveWorksheet();
      const dataWorksheet = ctx.workbook.worksheets.getItem(this._dataWorksheetName);
      const dataTable = dataWorksheet.tables.getItem(this._dataTableName);
      const dataRange = dataTable.getDataBodyRange();
      const chart = currentWorksheet.charts.add('ColumnClustered', dataRange, 'Auto');
      chart.setPosition('B15', 'R49');
      chart.title.text = 'History Data';
      chart.legend.position = 'Bottom';
      chart.legend.format.fill.setSolidColor('white');
      chart.dataLabels.format.font.size = 14;
      chart.dataLabels.format.font.color = 'black';
      chart.series.getItemAt(0).name = 'Nr of Sessions';
      await ctx.sync();
    }).catch(err => {
      console.error(err);
    });
  }
}
