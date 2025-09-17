using ReelixApi.Application;
using ReelixApi.Domain;
using ReelixApi.Infrastructure;

namespace ReelixApi.Api
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            ConfigureServices(builder.Services);

            var app = builder.Build();

            ConfigureApp(app);

            app.Run();
        }

        private static void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            ConfigureLogging(services);
            ConfigureSwagger(services);
            ConfigureDependencyInjection(services);
            ConfigureBackgroundServices(services);
            ConfigureDatabase(services);
        }

        private static void ConfigureApp(WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                ConfigureDevelopmentTools(app);
            }

            app.UseAuthorization();
            app.MapControllers();
        }

        private static void ConfigureSwagger(IServiceCollection services)
        {
            services.AddOpenApi();
        }

        private static void ConfigureDatabase(IServiceCollection services)
        {
            // TODO: Register MariaDB & Neo4j DB contexts
        }

        private static void ConfigureDependencyInjection(IServiceCollection services)
        {
            services.AddDomainServices();
            services.AddApplicationServices();
            services.AddInfrastructureServices();
        }

        private static void ConfigureLogging(IServiceCollection services)
        {
            // TODO: Setup Serilog or another logging framework
        }

        private static void ConfigureBackgroundServices(IServiceCollection services)
        {
            // TODO: Register background workers
        }

        private static void ConfigureDevelopmentTools(WebApplication app)
        {
            app.MapOpenApi();
            app.UseSwaggerUI(options =>
            {
                options.DocumentTitle = "Reelix API Documentation";
                options.SwaggerEndpoint("/api/openapi/v1.json", "Reelix API");
            });
        }
    }
}
