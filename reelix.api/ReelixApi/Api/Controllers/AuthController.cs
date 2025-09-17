using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReelixApi.Application.Auth.Dtos;
using ReelixApi.Application.Auth.Handlers;

namespace ReelixApi.Api.Controllers
{
    public class AuthController : ControllerBase
    {
        private readonly LoginHandler _loginHandler;

        public AuthController(LoginHandler loginHandler)
        {
            _loginHandler = loginHandler;
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest request)
        {
            var result = await _loginHandler.HandleAsync(request);
            return Ok(result);
        }
    }
}