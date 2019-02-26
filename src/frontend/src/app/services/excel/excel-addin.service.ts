import { Observable, of } from 'rxjs';
import { ExcelService } from './excel.service';
import { HistoryDataModel } from '../../models/history-data.model';

export class ExcelAddinService extends ExcelService {

  private readonly _worksheetName = 'History Data';
  private readonly _tableName = 'HistoryData';
  public sortByFullname(): void {
    Excel.run(async ctx => {
      const worksheetName = this._worksheetName;
      const currenciesWorksheet = ctx.workbook.worksheets.getItem(worksheetName);
      const table = currenciesWorksheet.tables.getItemAt(0);
      table.sort.apply([{key: 0, ascending: true}]);
      await ctx.sync();
    }).catch(err => (console.log(err)));
  }

  public sortByCount(): void {
    Excel.run(async ctx => {
      const worksheetName = this._worksheetName;
      const currenciesWorksheet = ctx.workbook.worksheets.getItem(worksheetName);
      const table = currenciesWorksheet.tables.getItemAt(0);
      table.sort.apply([{key: 4, ascending: false}]);
      await ctx.sync();
    }).catch(err => (console.error(err)));
  }

  public sendPresentationStatsToExcel(historyData: Array<HistoryDataModel>): void {
    Excel.run(async ctx => {
      const worksheetName = this._worksheetName;
      const existing = ctx.workbook.worksheets.getItemOrNullObject(worksheetName);
      if (existing) {
        existing.delete();
      }

      const currenciesWorksheet = ctx.workbook.worksheets.add(worksheetName);
      const currenciesTable = currenciesWorksheet.tables.add('A1:E1', true);
      currenciesTable.name = this._tableName;

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
      const dataWorksheetName = this._worksheetName;
      const dataTableName = this._tableName;

      const currentWorksheet = ctx.workbook.worksheets.getActiveWorksheet();
      const dataWorksheet = ctx.workbook.worksheets.getItem(dataWorksheetName);
      const dataTable = dataWorksheet.tables.getItem(dataTableName);
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

  public getCurrentSelection(): Observable<any> {
    return Observable.create(observer => {
      Excel.run(async ctx => {
        const range = ctx.workbook.getSelectedRange();
        range.load('values');
        await ctx.sync().then(
          () => {
            observer.next(range.values[0][0]);
            observer.complete();
          },
          err => {
            observer.error(err);
          }
        );
      }).catch(err => {
        console.error(err);
      });
    });
  }

  public setValueBelowSelection(value: string | boolean | number) {
    Excel.run(async ctx => {
      const range = ctx.workbook.getSelectedRange();
      range.load('rowIndex, columnIndex');
      await ctx.sync().then(async () => {
        const target = ctx.workbook.worksheets.getActiveWorksheet().getCell(range.rowIndex + 1, range.columnIndex);
        target.values = [[value]];

        await ctx.sync();
      });
    }).catch(err => {
      console.error(err);
    });
  }
}
