const express = require(`express`)
const app = express()
const porta = 5000

let produtos = [
    {
        nome: "skin vandal: vingança de gaia",
        valor: "2875 vp",
        descricao: "skin com variantes entre branco, vermelho, azul e verde",
        imagem: "https://s2-ge.glbimg.com/Ro85upmJQzCs7Ztog1Pib5iqtkE=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/7/E/q9QT1mSTym7w8X1DBxAg/gaias-vengeance-bundle.jpg"
    },
    {
        nome: "skin vandal: netuno",
        valor: "2175 vp",
        descricao: "skin com variantes nas cores branco e preto",
        valor:"https://cdn.ggmax.com.br/images/acffbd1eb3a9de006dac92ed2677ecb8.sm.jpg"
    },
    {
        nome: "skin vandal: lúgubre",
        valor: "2175 vp",
        descricao: "skin nas variantes verde escuro e branco com dourado",
        imagem: "https://cdn.dfg.com.br/itemimages/906363790-conta-valorant-full-acesso-skins-meta-DKTO.webp"
    }
]

app.get('/produto',(requisicao, resposta) => {
    try{
        return resposta.json(produtos).status(200)
    }catch (error) {
        return resposta.json({message: "operação invalida"}).status(400)
    }
})

app.listen(porta, () => {
    console.log(`server kisten on http://localhost:${porta}`)
})