//Core Module URL

const url = require('url');

const address = "http://www.meusite.com.br/catalog?produtos=cadeira"

const parseURL = new url.URL(address);
]console.log(parseURL.host);
]console.log(parseURL.pathname);
]console.log(parseURL.search);
]console.log(parseURL.searchParams);
]console.log(parseURL.searchParams.get('produtos'));