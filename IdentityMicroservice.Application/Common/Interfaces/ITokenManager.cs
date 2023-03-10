using IdentityMicroservice.Domain.Entities;
using IdentityMicroservice.Domain.Enums;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IdentityMicroservice.Application.Common.Interfaces
{
    public interface ITokenManager
    {
        Task<Tuple<string, string>> GenerateTokenAndRefreshToken(SymmetricSecurityKey signinKey,IdentityUser user, List<string>roles,JwtSecurityTokenHandler tokenHandler,string newJti);
        Task<IdentityUserTokenConfirmation> CreateConfirmationToken(Guid userId, ConfirmationTokenType tokenType);
        Task<IdentityUserTokenConfirmation> GetUserActiveConfirmationToken(Guid userId, string tokenValue, ConfirmationTokenType tokenType);
        string GenerateRefreshToken();
        Tuple<string,string,string, string, string> GetPrincipalFromExpiredToken(string token);
        Task<Tuple<string,string>> ReGenerateTokens(ClaimsIdentity claims,IdentityUserToken usertoken);
        bool IsTokenValid (string token);
        Task MarkRecoveryTokenAsUsed(IdentityUserTokenConfirmation obj);
    }
}
