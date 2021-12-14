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
exports.deleteGame = exports.createGame = exports.putGame = exports.getGameById = exports.getGame = void 0;
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
