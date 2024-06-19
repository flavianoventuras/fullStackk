const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs')


console.log("Iniciamos o account!");
operation();

function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'

        ]
    }]).then(answer =>{
        const action = answer['action'];
        if(action === 'Criar Conta'){
            createAccount()
        }
    }).catch(err => console.log(err))
}

function createAccount(){
    console.log(chalk.bgGreen('Parabéns por escolher ser roubado por nós'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    ConstruindoConta()
}

function ConstruindoConta(){
    inquirer.prompt([{
        name: "accountName",
        message: 'Digite seu nome para criar a sua'

    }]).then(answer =>{
        const accountName = answer['accountName']
        console.log(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed('Conta já existe'))
            ConstruindoConta();
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}',
        (err) =>{console.log(err)})
        console.log(chalk.bgGreen('Parabéns! A sua conta foi criada""'))


    }).catch(err => console.log(err))
}


