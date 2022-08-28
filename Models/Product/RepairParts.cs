namespace MarketPlaceWeb.Models
{
    public class RepairParts:Product
    {
        /// <summary>
        /// В наличии штук
        /// </summary>
        public string? Count { get; set; }
        /// <summary>
        /// Состояние
        /// </summary>
        public string? State { get; set; }
        /// <summary>
        /// Прайс, руб
        /// </summary>
        public string? PriceRub { get; set; }
        /// <summary>
        /// Склад
        /// </summary>
        public string? Location { get; set; }       
    }
}
