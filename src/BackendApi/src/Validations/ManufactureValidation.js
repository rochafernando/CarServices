const { Joi} = require('celebrate');


const nameValid = Joi.object().keys({
        name : Joi.string().trim().required().min(3).max(50)
    }); 



module.exports = nameValid;
