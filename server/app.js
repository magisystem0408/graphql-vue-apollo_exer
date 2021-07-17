const  express =require('express')
const {graphqlHTTP}=require('express-graphql')


const mongoose =require('mongoose')
const schema =require('./schema/schema')
const cors =require('cors')
const  app =express()


require('dotenv').config()
const env =process.env

const db=env.CONNECT_DB


mongoose.connect(db,{
    useUnifiedTopology:true
}).then(() =>{
    console.log('データベースに接続しました')
}).catch(err =>{
    console.log('####接続失敗しました#####')
    console.log(err)
})

mongoose.connection.once('open',()=>{
    console.log('データベースの接続が完了しました')
})

app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(env.PORT,()=>{
    console.log('サーバーが開きました')
})