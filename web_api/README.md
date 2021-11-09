# Setup
1. Create a file named `.env` inside the `web_api` directory with default content
    ```
    # .env default content
    MYSQL_PASSWORD=password
    API_PORT=4444
    ```
2. Build docker images
  * `sudo docker-compose build`
3. Run the docker images
  * `sudo docker-compose up`
4. Confirm they are alive
  * `sudo docker ps`
  * The Deno web server and MySQL database will should be "Up"

## To run stuff on the MySQL database docker image
* `sudo docker exec -it db bash`
* `mysql -p` provide the MYSQL_PASSWORD in the `.env` file

### MySQL command reference
* `show databases;` lists all dbs
* `select Database() from dual;` shows current db