"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsGame = exports.userGame = exports.paginateGame = exports.searchGame = exports.latestGame = exports.deleteGame = exports.createGame = exports.updateInfoGame = exports.putGame = exports.getGameById = exports.getGame = void 0;
const game_1 = require("../models/game");
function getGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to get game by id', req.params.id);
        let getGame = yield game_1.GameModel.find({});
        if (!getGame) {
            res.status(404).send();
        }
        else {
            res.json(getGame);
        }
    });
}
exports.getGame = getGame;
function getGameById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to get game by id', req.params.id);
        let getGame = yield game_1.GameModel.findById(req.params.id);
        if (!getGame) {
            res.status(404).send();
        }
        else {
            res.json(getGame);
        }
    });
}
exports.getGameById = getGameById;
function putGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to put game by id', req.params.id);
        let gameToPut = yield game_1.GameModel.findById(req.params.id);
        if (!gameToPut) {
            res.status(404).send();
        }
        else {
            gameToPut.title = req.body.title;
            let putGame = yield gameToPut.save();
            res.json(putGame);
        }
    });
}
exports.putGame = putGame;
function updateInfoGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to updateInfoGame by id', req.params.id);
        let updateInfoGame = yield game_1.GameModel.findById(req.params.id);
        if (!updateInfoGame) {
            res.status(404).send();
        }
        else {
            let update = Object.assign(Object.assign({}, updateInfoGame.toObject().infos), req.body);
            updateInfoGame['infos'] = update;
            let putGame = yield game_1.GameModel.updateOne({ _id: req.params.id }, updateInfoGame.toObject());
            res.json(update);
        }
    });
}
exports.updateInfoGame = updateInfoGame;
function createGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to add game :', req.body);
        let gameToCreate = new game_1.GameModel(req.body);
        let createdGame = yield gameToCreate.save();
        res.json(createdGame);
    });
}
exports.createGame = createGame;
function deleteGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to delete game by id', req.params.id);
        let deletedGame = yield game_1.GameModel.findByIdAndRemove(req.params.id);
        if (!deletedGame) {
            res.status(404).send();
        }
        else {
            res.json(deletedGame);
        }
    });
}
exports.deleteGame = deleteGame;
function latestGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request the latest value ');
        let latestGame = yield game_1.GameModel.findOne({}, {}, { sort: { 'addedAt': -1 } });
        if (!latestGame) {
            res.status(404).send();
        }
        else {
            res.json(latestGame);
        }
    });
}
exports.latestGame = latestGame;
function searchGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request the search value ');
        let name = req.query.name;
        let searchGame = yield game_1.GameModel.find({ title: new RegExp(name, 'i') }).limit(10);
        if (!searchGame) {
            res.status(404).send();
        }
        else {
            res.json(searchGame);
        }
    });
}
exports.searchGame = searchGame;
function paginateGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request the paginate value ');
        let page = parseInt(req.query.page) || 0; //for next page pass 1 here
        let limit = parseInt(req.query.limit) || 3;
        let paginateGame = yield game_1.GameModel.find().sort('title').limit(limit).skip(limit * page);
        if (!paginateGame) {
            res.status(404).send();
        }
        else {
            res.json(paginateGame);
        }
    });
}
exports.paginateGame = paginateGame;
function userGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request the user game value ');
        let user = req.params.id;
        let userGame = yield game_1.GameModel.find({ addedBy: user });
        if (!userGame) {
            res.status(404).send();
        }
        else {
            res.json(userGame);
        }
    });
}
exports.userGame = userGame;
function statsGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request the user game value ');
        const aggregatorOpts = {
            $group: {
                _id: "$addedBy",
                count: { $sum: 1 },
                moyenne: { $avg: "$infos.metacritic" }
            }
        };
        let statsGame = yield game_1.GameModel.aggregate([aggregatorOpts]);
        if (!statsGame) {
            res.status(404).send();
        }
        else {
            res.json(statsGame);
        }
    });
}
exports.statsGame = statsGame;
