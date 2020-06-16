# Flower Store - Mock UI
This is an example of a quick full-stack application using Express + ReactJs + PostgresSQL.
In response to [https://github.com/VentionCo/vention-front-end-test](https://github.com/VentionCo/vention-front-end-test). 
No bootstrap libraries were permitted to make up the layout. 

Product list:
![enter image description here](https://github.com/ruttyj/FlowerShop/blob/master/docs/list.png?raw=true)
  
  Product list when hovered:
![enter image description here](https://github.com/ruttyj/FlowerShop/blob/master/docs/list-hover.png?raw=true)

Product details:
![enter image description here](https://github.com/ruttyj/FlowerShop/blob/master/docs/product-details.png?raw=true)


Create product:
![enter image description here](https://github.com/ruttyj/FlowerShop/blob/master/docs/add-product.png?raw=true)


Loading Screen

![enter image description here](https://github.com/ruttyj/FlowerShop/blob/master/docs/loading.png?raw=true)




# To Install
Set up the PostgresSQL DB to use your config modify the contents of `/server/db.js` to match your setup.
Be default the values are as follows:
| Attribute | Value |
|--|--|
|host  |localhost 
|port | 5432
|user | postgres
|password | root
|database | Flowers

Once the database is running simply execute the following shell scripts to get up and running

    ./install.sh

Followed by 

    ./start.sh

A browser window for [localhost:3000](http://localhost:3000/)  should appear for the client side app. Requests will be made to localhost:5000
