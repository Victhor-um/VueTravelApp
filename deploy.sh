#!/usr/bin/env sh

# прекращаем работу скрипта при возникновении ошибок
set -e

# сборка приложения
npm run build

# переход в папку с собранным приложением
cd dist

# создание .nojekyll для обхода обработки Jekyll
echo > .nojekyll

# если вы развертываете на пользовательском домене
# echo 'www.example.com' > CNAME

# инициализация локального репозитория Git
git init
git checkout -B main
git add -A
git commit -m 'deploy'

# развертывание приложения на GitHub Pages
git push -f https://github.com/Victhor-um/VueTravelApp.git main:gh-pages

cd -