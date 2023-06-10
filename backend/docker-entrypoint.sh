#!/bin/sh

exec java ${JVM_OPTS} -Djava.security.egd=file:/dev/./urandom -Dlogging.config=/app/config/logback-spring.xml -jar ${APP_NAME}.jar --spring.config.name=application,redisson
