using MarketPlaceWeb.Models;
using MarketPlaceWeb.Services;
using Microsoft.AspNetCore.Mvc;
using NPOI.SS.UserModel;
using WebWeather.Extensions;
namespace MarketPlaceWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly string key = "1bY9lhxyhaiePLjBvJxf8h5bLCIUR_vJwxfzvJjy2IAw";
        private readonly string link = @$"https://docs.google.com/feeds/";
        private (Market data, DateTime time) cache = (null, DateTime.MinValue);
        private readonly HttpClient client = new HttpClient();
        public ProductsController(ILogger<ProductsController> logger)
        { }


        [HttpGet]
        public Market Get()
        {
            var request = $"download/spreadsheets/Export?key={key}&exportFormat=xlsx";
            client.BaseAddress = new Uri(link);
            var responce = client.GetAsync(request, HttpCompletionOption.ResponseContentRead).Result;
            var result = responce.Content.ReadAsByteArrayAsync().Result;
                       
            return GetMarketSheets(result);
        }


        public Market GetMarketSheets(byte[] data)
        {
            if(cache.data is not null && cache.time > DateTime.Now.AddMinutes(-10))
            {
                return cache.data;
            }
            var excelBook = ExcelTransformer.TransformByteDataToExcel(data);
            var market = new Market();
            for (int i = 0; i < excelBook.NumberOfSheets; i++)
            {
                var sheet = excelBook.GetSheetAt(i);
                var startRow = GetStartingRowBy(sheet, i);
                
                for (int j = startRow; j< sheet.LastRowNum; j++)
                {
                    var row = sheet.GetRow(j);
                    if (row.CheckValid())
                    {
                        var cells = row.GetAllCellFromRow(i);
                        if(i == 0)
                        {
                            var product = new ProductDeliver()
                            {
                                Id = j,
                                Description = "Дефолтное описание\nСсылка на продавца: Telegramm @trifolia +7(910)970-30-10",
                                Name = cells[0].ToString(),
                                HashRate = cells[1].ToString(),
                                State = cells[2].ToString(),
                                PriceRub = cells[3].ToString(),
                                PriceUsd = cells[4].ToString(),
                                PriceTh = cells[5].ToString(),
                                Relevance = cells[6].ToString(),
                            };
                            market.MarketProductDeliver.Products.Add(product);
                        }
                        if(i == 1)
                        {
                            var product = new ProductInStock()
                            {
                                Id = j,
                                Description = "Дефолтное описание\nСсылка на продавца: Telegramm @trifolia +7(910)970-30-10",
                                Name = cells[0].ToString(),
                                State = cells[1].ToString(),
                                Count = cells[2].ToString(),
                                HashRate = cells[3].ToString(),
                                PriceRub = cells[4].ToString(),
                                Location = cells[5].ToString(),
                                Power = cells[6].ToString(),
                                ElectricityСosts = cells[7].ToString(),
                                Profitability = cells[8].ToString(),
                                Earnings = cells[9].ToString(),
                                PaybackPeriod = cells[10].ToString(),
                            };
                            market.MarketProductInStock.Products.Add(product);
                        }
                        if(i == 2)
                        {
                            var product = new RepairParts()
                            {
                                Id = j,
                                Description = "Дефолтное описание\nСсылка на продавца: Telegramm @trifolia +7(910)970-30-10",
                                Name = cells[0].ToString(),
                                Count = cells[1].ToString(),
                                State = cells[2].ToString(),
                                PriceRub = cells[3].ToString(),
                                Location = cells[4].ToString()
                            };
                            market.MarketRepairParts.Products.Add(product);
                        }
                    }
                    else
                    {
                        break;
                    }
                }

            }
            return market;
        }

        private static int GetStartingRowBy(ISheet sheet, int order)
        {
            if(sheet == null)
            {
                throw new ArgumentNullException(nameof(sheet));
            }
            switch (order)
            {
                case 0:
                    return 3;
                case 1:
                    return 7;
                case 2:
                    return 5;
                default:
                    break;
            }
            return 4;
        }
    }
}
