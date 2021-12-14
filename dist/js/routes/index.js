"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const game_1 = require("../controllers/game");
const user_1 = require("../controllers/user");
exports.router = (0, express_1.Router)();
//Game
exports.router.post('/games', game_1.createGame);
//User
exports.router.post('/users', user_1.createUser);
