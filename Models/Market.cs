namespace MarketPlaceWeb.Models
{
    public class Market
    {    
        /// <summary>
        /// Наименование маркета
        /// </summary>
        public string Name { get; set; } = string.Empty;
        /// <summary>
        /// 
        /// </summary>
        public MarketProductDeliver MarketProductDeliver = new MarketProductDeliver();

        public MarketProductInStock MarketProductInStock = new MarketProductInStock();

        public MarketRepairParts MarketRepairParts = new MarketRepairParts();
        /// <summary>
        /// Описание маркета
        /// </summary>
        public string Description { get; set; } = string.Empty;

        /// <summary>
        /// Курс доллара в рублях
        /// </summary>
        public string UsdRate { get; set; } = string.Empty;
        /// <summary>
        /// Курс доллара в рублях для третьего листа
        /// </summary>
        public string GoogleUsdRate { get; set; } = string.Empty;
        /// <summary>
        /// Доходность майнинга на текущую дату по данным rupool.pro руб. за Th/сутки			
        /// </summary>
        public string MiningProfitability { get; set; } = string.Empty;
        /// <summary>
        /// Введите стоимость электроэнергии руб./кВт*ч 		
        /// </summary>
        public string ElectricityСost { get; set; } = string.Empty;

        public Market()
        {
            this.MarketProductDeliver = new()
            {
                Id = 1,
                Name = "Под заказ",
                AdditionalInformation = "Выкуп, прием на реализацию, зачёт вашего оборудования и комплектующих!"
            };
            this.MarketProductInStock = new()
            {
                Id = 2,
                Name = "Асики в наличии",
                AdditionalInformation = "Выкуп, прием на реализацию, зачёт вашего оборудования и комплектующих!"
            };
            this.MarketRepairParts = new()
            {
                Id = 3,
                Name = "Запчасти в наличии",
                AdditionalInformation = "Выкуп, прием на реализацию, зачёт вашего оборудования и комплектующих!"
            };
        }
    }
}
