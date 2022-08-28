namespace MarketPlaceWeb.Models
{
    public class MarketSheet
    {
        public int Id { get; init; }
        public string? Name { get; init; }
        public List<Product>? Product { get; init; }
        public string? AdditionalInformation { get; init; }
    }
}
