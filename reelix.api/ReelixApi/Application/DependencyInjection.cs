using ReelixApi.Application.Auth.Handlers;

namespace ReelixApi.Application
{
    public static class DependencyInjection
    {
        public static void AddApplicationServices(this IServiceCollection services)
        {
            // Scoped
            services.AddScoped<LoginHandler>();

            // Transient

            // Singleton
        }
    }
}