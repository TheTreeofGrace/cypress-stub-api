FROM nginx:1.16.0-alpine as react-app
COPY --from=react-build app/build /usr/share/nginx/html
EXPOSE 80
CMD nginx "-g" "daemon off;"
