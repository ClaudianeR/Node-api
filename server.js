const fastify = require('fastify')({ logger: true })

const PORT = 5005
fastify.get('/', (request, reply) => {
    reply.send('Servidor Rodando!')

})

fastify.get('/produtos', (request, reply) => {
    reply.send('Servidor Rodando - teste!')

})


fastify.listen({ port: PORT }, (err, address) => {
    if (err) throw err
    console.log(`Server is now listening on ${address}`);


})