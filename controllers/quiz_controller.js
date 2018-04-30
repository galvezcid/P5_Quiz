/*
En quiz_controller creamos la función que imprimirá los quizzes en pantalla
Necesitamos acceder al modelo de datos, por los que requerimos models
(.. significa que nos movemos al directorio anterior)
 */
const Sequelize = require("sequelize");
const {models} = require("../models");

exports.index =(req, res, next) => {
    models.quiz.findAll()
        .then(quizzes => {
            res.render("quizzes", {quizzes})
        })
        .catch(error => next(error));
};