---
path: "/projects/thoughts"
date: "2019-07-23"
title: "Thoughts App"
featuredImage: "./ghmojo.png"
tags: ["react", "node", "mongodb", "redux", "aws"]
---

Back in 2017, I wanted to train my fullstack skills with the node + react combo, data being stored to Mongodb. The idea behind the app is a simple social network: users can post their thoughts and view thoughts from others.

For this being a bit more complicated app, I decided to use Redux for state management. Authentication is done with jwt tokens, unit testing was a breeze with Mocha & Chai.
I chose Amazon web services as a cloud provider: I pushed my node app to EC2 instance, and the react client to s3 bucket. Although my aws free tier has expired so I've shut down both.
