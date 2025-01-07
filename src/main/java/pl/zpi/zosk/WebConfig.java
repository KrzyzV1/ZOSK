package pl.zpi.zosk;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Zezwala na połączenia z frontendem na localhost:3000
        registry.addMapping("/**")  // Zezwala na dostęp do wszystkich endpointów
                .allowedOrigins("http://localhost:3000")  // Zezwolenie tylko z localhost:3000
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")  // Dozwolone metody HTTP
                .allowedHeaders("*")  // Zezwolenie na wszystkie nagłówki
                .allowCredentials(true);  // Zezwolenie na ciasteczka, jeśli jest potrzebne
    }
}