# Usa imagem base do Java
FROM openjdk:25-jdk-slim

# Cria diretório de trabalho
WORKDIR /app

# Copia o .jar gerado pelo Maven
COPY target/*.jar app.jar

# Expõe a porta do Spring Boot
EXPOSE 8080

# Comando para iniciar o app
ENTRYPOINT ["java", "-jar", "app.jar"]