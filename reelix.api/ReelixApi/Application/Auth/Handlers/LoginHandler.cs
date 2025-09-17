using ReelixApi.Application.Auth.Dtos;

namespace ReelixApi.Application.Auth.Handlers
{
    public class LoginHandler
    {
        public async Task<LoginResponse> HandleAsync(LoginRequest request)
        {
            return new LoginResponse();
        }
    }
}