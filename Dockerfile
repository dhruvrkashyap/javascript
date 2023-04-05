FROM nginx
WORKDIR /usr/share/nginx/html/
COPY /Calculator .
EXPOSE 80