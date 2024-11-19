FROM node:latest
WORKDIR /app
COPY package*.json ./

RUN npm install -g pnpm
# Copie o restante do código do projeto para o container
COPY . .
# Defina a porta que o container irá utilizar
EXPOSE 2222
# Defina o comando para iniciar o projeto
CMD ["pnpm", "run", "start:prod"]


#docker build -t [nome] .
#docker run -d -p 127.0.0.1:2222:2222 [nome]