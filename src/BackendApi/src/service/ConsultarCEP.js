var http = require('http');
var qs = require('querystring');

dados ={
    "relaxation": "02871000",
    "tipoCEP": "ALL",
    "semelhante": "N"
} 


var parametros={
    "method": "POST",
    "hostname": "www.buscacep.correios.com.br",
    "path":"/sistemas/buscacep/resultadoBuscaCepEndereco.cfm",
    "headers":{
        "content-type" : "application/x-www-form-urlencoded"
    }
}

var req = http.request(parametros, function(httpResponse) {
        
    var pedacos = []

    httpResponse.on("data",function (pedaco) {
        pedacos.push(pedaco);
    });

    httpResponse.on("end",function () {

        var body = Buffer.concat(pedacos);
        var html = body.toString("latin1");
        var regularExpression = /(?:<td.*?>)(.*?)(?:<\/td>)/g
        
        var m;
        var resultado = [];
        while ((m = regularExpression.exec(html)) !== null){
            resultado.push(m[1].replace(""));
         }
         console.log(resultado);
    });
})
req.write(qs.stringify(dados));
req.end();