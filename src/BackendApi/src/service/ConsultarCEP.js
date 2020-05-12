var http = require('http');
var qs = require('querystring');
 
var minhaPromise = function(){
    return new Promise(function(resolve , reject){
        dados ={
            "relaxation": process.argv[2],
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
            
                        httpResponse.on("end",function teste() {
            
                       var body = Buffer.concat(pedacos);
                       var html = body.toString("latin1");
                       var regularExpression = /(?:<td.*?>)(.*?)(?:<\/td>)/g
        
                        var m;
                        var resultado = [];
                        while ((m = regularExpression.exec(html)) !== null){
                         resultado.push(m[1].replace("&nbsp;",""));
                         resolve(resultado);
                      }
                });
            })
            req.write(qs.stringify(dados));
            req.end();
    });
}
/*minhaPromise()
    .then(function(response){
        console.log(response);
    })*/