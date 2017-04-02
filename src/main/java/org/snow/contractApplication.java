package org.snow;

import org.snow.storage.StorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class contractApplication {

    public static void main(String[] args) {
        SpringApplication.run(contractApplication.class, args);
    }
}
