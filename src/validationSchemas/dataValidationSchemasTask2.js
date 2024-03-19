import Joi from 'joi';

const recordCreateSchema = Joi.object({
    line: Joi
        .number()
        .required(),

    valve: Joi
        .number()
        .default('')
        .when('valves', {is: Joi.exist(), then: Joi.forbidden()})
        .when('valves', {not: Joi.exist(), then: Joi.required()}),
        
    valves: Joi
        .array()
        .items(Joi.number()),
        
    start: Joi
        .number()
        .min(0)
        .max(1440)
        .required(),

    end: Joi
        .number()
        .min(0)
        .max(1440)
        .required(),

    type: Joi
        .string()
        .required()
        .valid('MM', 'Volume', 'Time'),
    
    amount: Joi
        .number()
        .required()
        .positive(),
    
    fertigation: Joi
        .boolean()
        .required(),

    start_date: Joi
        .date()
        .required(),

    machine: Joi
        .number(),

    cycles: Joi
        .number(),

    interval: Joi
        .number(),
    
    field: Joi
        .any(),
    
    fert_recipe: Joi
        .number(),


}).required();

export { recordCreateSchema }