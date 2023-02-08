# **48H : Decentralized online shop** 
</br>

## **Introduction**

Let's introduce ourselves ! We are : **GUENARD Juliette B2**, **CHAFFAUX Kévin B1**, **SORGIATI Sacha B1**, **NZONZA Tayvadi B1** and we are this website's developers : CyberShopify.
This project consists of the implementation of a Proof of Concept of decentralized online store allowing small and medium-sized merchants to free themselves from large centralized marketplaces.

<img src=https://zupimages.net/up/23/06/yj4l.png width=100px>

This will involve:

- Be able to create an account and log in
-  display several pruducts on differents shops from different data bases .
- To solve the "decentralized" problem, we think about a particular infrastructure illustrated by our little solution just here:

<img src=https://zupimages.net/up/23/06/wy73.png width=500px>

</br>
This project required a mastery of those following notions :

- Master the syntax of NEXT/REACT
- Master the syntax of express.js for the backend (you can find this part in the folder "CyberShopify_back")
- Set an API to manage the interaction with different databases
- Know how to interact with a SQL database from an API
- Compose web pages in  while avoiding repetition

<img src="https://zupimages.net/up/23/06/6j5n.png" width=600px>

## **What is functionnal ?**

The project consisted mainly of reflecting on a decentralization solution ! We thought of updating an "ip list" table for each bdd server (= commerce). This list would contain the ip of non-balcklisted stores! It would then be on the API side, that we would make sure that only the data from the authorized server is displayed.

To manage authorization, we can imagine generating a jwt (as we did for backend authentication). After having checked that the ip of a server is valid, we could generate a jwt token and each time we will check the validation of the connection!

As you can see, we have made a function for the api that handles IPs. Depending on the IPs present in the fictitious table "list ip", the function will return urls linked to APIs of other specific servers!

```
const ips = [];

for (let i = 0; i < ips.length; i++) {
    app.get(`/getdb/${ips[i]}`, (_, resp) => {
        fetch(`http://${ips[i]}:5000/`)
        .then(res => res.json())
        .then(res => resp.json(res))
    });
```

What works :

-    a react shop website displaying products from the PHPmyAdmin database (cybershopyfy folder)
-   an express js API (like a gateway between front and bdd) (cybershopyfy_back folder)
-   an express js JWT (backend to make login and register functionnal in front)
<img src="https://zupimages.net/up/23/06/x67k.png" width=600px>

-   login and register functionnal on the website !


***

## 🤖 **Technologies** 
- [Visual Studio code](https://code.visualstudio.com/) : our developement environment !
- The frontend programming language : [REACT](https://fr.reactjs.org/)
- The backend programming language : [express js](http://expressjs.com/)

***

## 💻 **How does our website works ?**
</br>
Our website works with the react language, an express js api and a XAMPP( import dump file !) </br>
To install :

> git clone https://github.com/jellyph1sh/CyberShopify.git

>open the CyberShopify_back folder in vsc on an other window

First import our bdd (dump file : cybershop.sql) and start the xamp server !

Then, run the development server in CyberShopyfy:

```bash
npm run dev

```

And run the api in CyberShopify_back:

```bash
node index.js(make sure you installed nodeamon)

```

-enjoy ;)

***
## 👨‍💻 TEAM
>GUENARD Juliette  https://github.com/julietteGUE16<br/>
>CHAFFAUX Kévin https://github.com/typhnz<br/>
>SORGIATI Sacha https://github.com/jellyph1sh<br/>
>CHAFFAUX Kévin https://github.com/NockIA