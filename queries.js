/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/09/23.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

const promise = require('bluebird');
const options = {
  //initialise options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://postgres:sa@localhost:5432/alfaromeos';
const db = pgp(connectionString);

// add query functions

const getAllAlfaRomeos = function (req, res, next) {
  db.any('select * from cars')
    .then( function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved All Alfa Romeos'
        });
    })
    .catch (function (err) {
      return next(err);
    });
};

const getSingleAlfaRomeo = function (req, res, next) {
  const carId = parseInt(req.params.id);
  db.one('select * from cars where id = $1', carId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE alfa romeo'
        });
    })
    .catch(function (err) {
      return next(err);
    });
};

const createAlfaRomeo = function (req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into cars (name, colour, age, engine) ' +
    'values (${name}, ${colour}, ${age}, ${engine})', req.body)
    .then(function () {
      res.status(200).json({status: 'success', message: 'Inserted one Alfa Romeo'})
    })
    .catch(function (err) {
      return next(err);
    });
};

module.exports = {
  getAllAlfaRomeos: getAllAlfaRomeos,
  getSingleAlfaRomeo: getSingleAlfaRomeo,
  createAlfaRomeo: createAlfaRomeo,
  // updateAlfaRomeo: updateAlfaRomeo,
  // removeAlfaRomeo: removeAlfaRomeo
};
