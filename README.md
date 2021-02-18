# Dynamics Web API Proxy error

This project shows the error raised with the dynamics-web-api raised [here](https://github.com/AleksandrRogov/DynamicsWebApi/issues/89). It is to do with making a https request behind a proxy.

## Prerequisites

### Software
- Node v14 (I'm sure lower versions will work)
- Docker

## Environment
- A .env file is required. See .sample-env for an example

## Installation
Run `npm i` to install dependencies

## Running
The first thing to make sure is that the project can successfully make a call to dynamics without the proxy. Make sure the .env file is filled in, also comment out the http_proxy and https_proxy for now. The index.js makes a request to a pre-existing collection called 'contacts' if this not available then change this.

Run `npm start` and you should see some results in the console:
[[screenshots/success-without-proxy.png]]

Now we must test with the proxy. Run docker-compose up to start up squid proxy on localhost:3128. Uncomment http_proxy and https_proxy in the .env file and run `npm start` again. It should fail:
[[screenshots/failure-with-proxy.png]]

If I make a similar request using curl via the proxy it succeeds

You can view the logs of the proxy by running 
`docker exec -it dynamics-web-api-proxy-error_Squid_1 tail -f /var/log/squid/access.log`

Below are the logs, the first 3 are the requests from the dynamics-web-api. The final request is from the curl command.
[[screenshots/curl-success-with-proxy.png]]





