# build for broduction
npm run build

# DEPLOY
rsync -avzt -e 'ssh' ./build/ freak.fan:/var/www/html/fx-backend
