Девсервер для хоста 



## Развертка девсервера:


Убедитесь что у вас стоит нода:

```
node -v
```

[Если не стоит](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)


## Клонируем репо и инициализируем ноду:

```shell
git clone https://github.com/PixelQuasar/simple-express-static-server
```
```shell
cd ./simple-express-static-server
```
```shell
npm install # справляемся с зависимостями
```

Весь клиентский код лежит в папке public

## Запуск
обычный:
```shell
npm run start
```

если захочется пошаманить с сервером:
```shell
npm run dev # при сохранении файлов сосет изменения и перезапускает сервер
```

## Развертка
### Докер
```shell
docker build -t my-webpage . # билдим
```
```shell
docker run -p 3000:3000 my-webpage # запускаем
```
### pm2 (легковесней докера)
```shell
npm run pm2:start # поднять процесс
```
```shell
npm run pm2:restart # рестартнуть процесс
```
```shell
npm run pm2:stop # остановить процесс
```
```shell
npm run pm2:delete # удалить процесс
```
