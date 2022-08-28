namespace MarketPlaceWeb.Models
{
    public class MarketProductDeliver
    {
        public int Id { get; init; }
        public string? Name { get; init; }
        public List<ProductDeliver> Products { get; init; } = new List<ProductDeliver>();
        public string? AdditionalInformation { get; init; }
    }

    public class MarketProductInStock
    {
        public int Id { get; init; }
        public string? Name { get; init; }
        public List<ProductInStock> Products { get; init; } = new List<ProductInStock>();
        public string? AdditionalInformation { get; init; }
    }

    public class MarketRepairParts
    {
        public int Id { get; init; }
        public string? Name { get; init; }
        public List<RepairParts> Products { get; init; } = new List<RepairParts>();
        public string? AdditionalInformation { get; init; }
    }
}
