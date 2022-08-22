using MarketPlaceWeb.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MarketPlaceWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Product> Get(int sheet)
        {
            var products = new List<Product>();
            products.AddRange(new[] {
                new Product { Id = 1, Name = "Pepa", Description = "Some first discription", Price = 5.5f },
                new Product() { Id = 2, Name = "Pepa", Description = "Some second discription", Price = 9.5f }});
            return products;
        }
    }
}
