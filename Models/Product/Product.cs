using System.ComponentModel.DataAnnotations;

namespace MarketPlaceWeb.Models
{
    public class Product
    {
        /// <summary>
        /// Порядок в списке
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Наименование модели
        /// </summary>
        public string? Name { get; set; }

        /// <summary>
        /// Описание
        /// </summary>
        public string? Description { get; set; }
    }
}
