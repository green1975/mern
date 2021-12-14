"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const game_1 = require("../controllers/game");
const user_1 = require("../controllers/user");
exports.router = (0, express_1.Router)();
//Game
exports.router.post('/games', game_1.createGame);
exports.router.get('/games', game_1.getGame);
exports.router.get('/games/:id', game_1.getGameById);
exports.router.put('/games/:id', game_1.putGame);
exports.router.delete('/games/:id', game_1.deleteGame);
//User
exports.router.post('/users', user_1.createUser);
exports.router.get('/users', user_1.getUser);
exports.router.get('/users/:id', user_1.getUserById);
exports.router.put('/users/:id', user_1.putUser);
exports.router.delete('/users/:id', user_1.deleteUser);
