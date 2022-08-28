using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace MarketPlaceWeb.Services
{
    public static class ExcelTransformer
    {
        public static IEnumerable<IWorkbook> TransformFilesToExcel(IFormFileCollection files)
        {
            foreach (var file in files)
            {
                using (var stream = file.OpenReadStream())
                {
                    var excelBook = new XSSFWorkbook(stream);
                    yield return excelBook;
                }
            }
        }
        public static IWorkbook TransformByteDataToExcel(byte[] data)
        {
            using (var stream = new MemoryStream(data))
            {
                var excelBook = new XSSFWorkbook(stream);
                return excelBook;
            }
        }
    }
}
