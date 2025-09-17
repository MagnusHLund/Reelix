using ReelixApi.Domain.Auth.ValueObjects;

namespace ReelixApi.Domain.Auth.Entities
{
    public class User
    {
        public Guid Id { get; }
        public Password Password { get; private set; }
    }
}