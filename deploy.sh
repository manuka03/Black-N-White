echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* untitled_geek306@42.106.38.242:/var/www/42.106.38.242/

echo "Done!"