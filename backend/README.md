# Express template

# Ensure you have configured your .gitignore file!

docker run -d \
--name mongo \
-p 27017:27017 \
-v mongo_data:/data/db \
-e MONGO_INITDB_DATABASE=testdb \
-e MONGO_INITDB_ROOT_USERNAME=user \
-e MONGO_INITDB_ROOT_PASSWORD=mongopass \
mongo:latest

docker run -d --name mongo -p 27017:27017 -v mongo_data:/data/db -e MONGO_INITDB_DATABASE=testdb -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=mongopass mongo:latest


    "serve": "ts-node-dev --transpile-only --esm --respawn src/index.ts",
    "serve:video": "nodemon -x ts-node-esm src/index.ts",
    "serve:node": "ts-node-dev --transpile-only --esm --respawn src/index.ts",
    "serve:win": "set NODE_OPTIONS=--experimental-specifier-resolution=node --import=ts-node/register && ts-node-dev --respawn --transpile-only src/index.ts",
    "serve:old": "NODE_OPTIONS='--experimental-specifier-resolution=node --import=ts-node/register' ts-node-dev --respawn --transpile-only src/index.ts",
    "serve:deprecared": "ts-node-dev --respawn --transpile-only src/index.ts",
    "serve:nodemon": "nodemon --watch src/**/*.ts --exec node --loader ts-node/esm src/index.ts",



