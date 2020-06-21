FROM maven:3.6.1-jdk-8 AS build-env

COPY . /app
WORKDIR /app
RUN mvn package
RUN java -jar ./target/demo-0.0.1-SNAPSHOT.jar
EXPOSE 3333

CMD "mvn" "spring-boot:run"