using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApiMongoDB.Data;
using WebApiMongoDB.Models;

namespace WebApiMongoDB.Services
{
    public class TricketServices
    {
        private readonly IMongoCollection<Ticket> _studentCollection;

        public TrainServices(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongoDb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _studentCollection = mongoDb.GetCollection<Ticket>(settings.Value.CollectionName);
        }

        // get all students
        public async Task<List<Ticket>> GetAsync() => await _studentCollection.Find(_ => true).ToListAsync();
        

        // get student by id
        public async Task<Ticket> GetAsync(string id) =>
            await _studentCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // add new student 
        public async Task CreateAsync(Ticket newStudent) =>
            await _studentCollection.InsertOneAsync(newStudent);

        // update student

        public async Task UpdateAsync(string id, Ticket updateStudent) =>
            await _studentCollection.ReplaceOneAsync(x=> x.Id == id, updateStudent);

        // delete student
        public async Task RemoveAsync(string id)=>
            await _studentCollection.DeleteOneAsync(x=> x.Id == id);
    }
}
