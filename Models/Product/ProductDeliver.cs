namespace MarketPlaceWeb.Models
{
    public class ProductDeliver: Product
    {
        /// <summary>
        /// Хешрейт
        /// </summary>
        public string? HashRate { get; set; }
        /// <summary>
        /// Состояние
        /// </summary>
        public string? State { get; set; }
        /// <summary>
        /// Цена т.р
        /// </summary>
        public string? PriceRub { get; set; }
        /// <summary>
        /// Цена USD
        /// </summary>
        public string? PriceUsd { get; set; }
        /// <summary>
        /// Стоимость тыс.руб./Th
        /// </summary>
        public string? PriceTh { get; set; }
        /// <summary>
        /// Актуальность
        /// </summary>
        public string? Relevance { get; set; }
    }
}
