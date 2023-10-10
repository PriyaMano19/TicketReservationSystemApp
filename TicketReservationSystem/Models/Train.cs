using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TicketReservationSystem.Models
{
    [BsonIgnoreExtraElements]
    public class Train
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("firstname")] 
        public string TrainName { get; set; } = "Train Name";

        [BsonElement("trainnum")] 
        public string TrainNumber { get; set; } = "Train Number";

        [BsonElement("type")] 
        public byte Type { get; set; } = 1;

        [BsonElement("route")] 
        public string Route { get; set; } = "Train Route";

        [BsonElement("date")]
        public DateTime Date { get; set; } = DateTime.MinValue;


        [BsonElement("time")]
        public string time { get; set; } = "Arrival Time";

        [BsonElement("available")]
        public bool IsAvailable { get; set; }




    }
}
