using System;


namespace IdentityMicroservice.Domain.Entities
{
    public partial class IdentityUserToken
    {
        public IdentityUserToken() { }
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string TokenValue { get; set; }
        public string RefreshTokenValue { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public bool IsTokenRevoked { get; set; }
        public virtual IdentityUser User { get; set; }
    }
}
