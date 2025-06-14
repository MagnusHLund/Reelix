namespace ReelixApi
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
            app.UsePathBase("/api");

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
            // TODO: Register MySQL & Neo4j DB contexts
        }

        private static void ConfigureDependencyInjection(IServiceCollection services)
        {
            // TODO: Register dependency injection

            // Scoped

            // Transient

            // Singleton
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
                options.SwaggerEndpoint("/openapi/v1.json", "Reelix API");
            });
        }
    }
}
