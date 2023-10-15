FROM php:8.1-apache
RUN apt-get update && apt upgrade -y
ADD server /var/www/html
ADD dist /var/www/html/dist
COPY server/livesport-talk-site.conf /etc/apache2/sites-available/livesport-talk-site.conf
RUN echo 'SetEnv SITE_URL ${SITE_URL}' >> /etc/apache2/conf-enabled/environment.conf
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf &&\
    a2enmod rewrite &&\
    a2enmod headers &&\
    a2enmod rewrite &&\
    a2dissite 000-default &&\
    a2ensite livesport-talk-site &&\
    service apache2 restart
EXPOSE 80

# install node
ENV NODE_VERSION=18.18.2
RUN apt install -y curl
RUN case "$(uname -m)" in \
    "x86_64" | "amd64") NODE_ARCH="x64" ;; \
    "aarch64" | "arm64") NODE_ARCH="arm64" ;; \
    *) echo "Unsupported architecture"; exit 1 ;; \
    esac && \
    URL="https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-${NODE_ARCH}.tar.xz" && \
    echo $URL && \
    curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-${NODE_ARCH}.tar.xz" | tar -xJ -C /usr/local --strip-components=1
RUN node --version