using MarketPlaceWeb.Models;
using MarketPlaceWeb.Services;
using Microsoft.AspNetCore.Mvc;

namespace MarketPlaceWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly string key = "1bY9lhxyhaiePLjBvJxf8h5bLCIUR_vJwxfzvJjy2IAw";
        private readonly string link = @$"https://docs.google.com/feeds/";

        private readonly HttpClient client = new HttpClient();
        public ProductsController(ILogger<ProductsController> logger)
        { }


        [HttpGet]
        public IEnumerable<MarketSheet> Get()
        {
            var request = $"download/spreadsheets/Export?key={key}&exportFormat=xlsx";
            client.BaseAddress = new Uri(link);
            var responce = client.GetAsync(request, HttpCompletionOption.ResponseContentRead).Result;
            var result = responce.Content.ReadAsByteArrayAsync().Result;
            var excelBook = ExcelTransformer.TransformByteDataToExcel(result);
            var marketSheets = new List<MarketSheet>();
            
            return marketSheets;
        }
    }
}
