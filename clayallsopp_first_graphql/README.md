GraphQL intro:

STEP 1:
server: 
babel-node graphql_1.js

client:
curl -XPOST http://localhost:3000/graphql

STEP 3:
$ babel-node graphql_3.js 
GraphQL listening at http://:::3000

curl -XPOST -H "Content-Type:application/graphql"  -d 'query RootQueryType { count }' http://localhost:3000/graphql

curl -XPOST -H 'Content-Type:application/graphql'  -d '{ count }' http://localhost:3000/graphql

curl -XPOST -H 'Content-Type:application/graphql'  -d '{__schema { queryType { name, fields { name, description} }}}' http://localhost:3000/graphql

STEP 3.2:
# Add mutation to the schema
$ babel-node graphql_3.js #(Re)Start Webserver

curl -XPOST -H 'Content-Type:application/graphql' -d 'mutation RootMutationType { updateCount }' http://localhost:3000/graphql
