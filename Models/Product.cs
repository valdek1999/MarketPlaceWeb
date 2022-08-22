using System.ComponentModel.DataAnnotations;

namespace MarketPlaceWeb.Models
{
    public class Product
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required, Display(Name = "Price")]
        public float Price { get; set; }
    }
}
