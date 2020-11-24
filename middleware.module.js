const timeout = 2000;
module.exports = function (req, res, next) {
    if (req.path === '/login') {
        res.status(200).send(require('./auth/login.json')['login']);
        return;
    } else if (req.path === '/refresh-token') {
        res.status(200).send(require('./auth/login.json')['reautenticacao']);
    } else if (req.path === '/register') {
        const body = req.body;
        setTimeout(() => {
            if (!body.email || !body.password) {
                res.status(500).send({
                    mensagens: "Requisição inválida"
                });
            } else {
                res.status(200).send({
                    mensagem: "Usuário registrado com sucesso"
                });
            }
        }, timeout);
        return;
    } else if (req.path === '/forgot-password') {
        const body = req.body;
        setTimeout(() => {
            if (!body.email) {
                res.status(500).send({
                    mensagens: "Requisição inválida"
                });
            } else {
                res.status(200).send({
                    mensagens: "Enviado!"
                });
            }
        }, timeout);
        return;
    } else if (req.path === '/criarApiCheck') {
        const body = req.body;
        setTimeout(() => {
            const random = Math.random() * 100;
            if(random > 80) {
                res.status(500).send({
                    mensagens: "Requisição inválida"
                });
            } else {
                res.status(200).send({
                    mensagens: "Criado!"
                });
            }
        }, timeout);
        return;
    } else {
        next()
    }
}