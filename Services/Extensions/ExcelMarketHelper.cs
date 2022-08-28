using NPOI.SS.UserModel;
using System.Globalization;

namespace WebWeather.Extensions
{
    public static class ExcelMarketHelper
    {
        public static bool CheckValid(this IRow row)
        {
            try
            {
                if (row == null)
                    return false;
                var firstcell = row.GetCell(0);

                if (firstcell.IsParsed())
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }            
        }
        public static bool IsParsed(this ICell cell)
        {
            var isParsed = true;
            if (string.IsNullOrEmpty(cell?.ToString()?.Trim() ?? ""))
            {
                isParsed = false;
            }
            return isParsed;
        }
        public static (bool isParsed, string Value) GetStringFromCell(this ICell cell)
        {
            try
            {
                var isParsed = true;
                if (string.IsNullOrEmpty(cell.ToString()?.Trim() ?? ""))
                {
                    isParsed = false;
                }
                try
                {
                    if (cell.CachedFormulaResultType == CellType.Numeric)
                    {
                        return (isParsed, cell.NumericCellValue.ToString());
                    }
                }
                catch (Exception ex)
                {
                }
                if (cell.CellType == CellType.Formula)
                {
                    return (isParsed, cell.RichStringCellValue.ToString() ?? "");
                }
                if (cell.CellType == CellType.Error)
                {
                    return (isParsed, cell.RichStringCellValue.ToString() ?? "");
                }
                if (cell.CellType == CellType.Numeric)
                {
                    return (isParsed, cell.NumericCellValue.ToString());
                }
                if (cell.CellType == CellType.String)
                {
                    return (isParsed, cell.RichStringCellValue.ToString() ?? "");
                }
                return (isParsed, cell.ToString()?.Trim() ?? "");
            }
            catch(Exception ex)
            {
                return (true, cell.ToString()?.Trim() ?? "");
            }
        }

        public static List<string> GetAllCellFromRow(this IRow row, int orderSheet)
        {
            var countCells = 0;
            if(orderSheet == 0)
            {
                countCells = 7;
            }
            if(orderSheet == 1)
            {
                countCells = 11;
            }
            if(orderSheet == 2)
            {
                countCells = 5;
            }
            return row.Cells
                      .GetRange(0, countCells)
                      .Select(x=>x.GetStringFromCell().Value)
                      .ToList();
        }
    }
}
