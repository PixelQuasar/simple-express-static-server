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
```shell
npm run dev # при сохранении сосет изменения и перезапускается автоматом
```

### Если не запустилось:
попробуйте это
```shell
npm i nodemon -g --save-dev
```
