const { Joi } = require('celebrate');


module.exports = {
    nameValid : () => Joi.object().keys({
        name : Joi.string().trim().required().min(3).max(50)
    }),

    identification : function(){ return Joi.object().keys({
        id : Joi.number().required()
    })}
}



