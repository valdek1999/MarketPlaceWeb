namespace MarketPlaceWeb.Models
{
    public class ProductInStock : Product
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
        /// Кол-во в наличии, шт.
        /// </summary>
        public string? Count { get; set; }        
        /// <summary>
        /// Прайс, руб
        /// </summary>
        public string? PriceRub { get; set; }
        /// <summary>
        /// Склад
        /// </summary>
        public string? Location { get; set; }
        /// <summary>
        /// Мощность
        /// </summary>
        public string? Power { get; set; }
        /// <summary>
        /// Затраты на электроэнергию
        /// </summary>
        public string? ElectricityСosts { get; set; }
        /// <summary>
        /// Доходность в месяц, руб
        /// </summary>
        public string? Profitability { get; set; }
        /// <summary>
        /// Чистая прибыль руб в месяц
        /// </summary>
        public string? Earnings { get; set; }
        /// <summary>
        /// Срок окупаемости
        /// </summary>
        public string? PaybackPeriod { get; set; }
    }
}
