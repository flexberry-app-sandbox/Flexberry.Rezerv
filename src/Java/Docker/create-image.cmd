docker build --no-cache -f SQL\Dockerfile.PostgreSql -t rezerv-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t rezerv-java/app ../../..
