module.exports = function nomalizeName(name) {

    const list = name.trim().split(" ");
    const sanitizedName = [];
    
    list.forEach((name) => { 
        if(name.length > 0)
        {
            sanitizedName.push(name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase());            
        }
    });
    
    return sanitizedName.join(" ").toString();
}