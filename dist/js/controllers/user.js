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
exports.createUser = exports.deleteUser = exports.putUser = exports.getUserById = exports.getUser = void 0;
const user_1 = require("../models/user");
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to get user by id', req.params.id);
        let getUser = yield user_1.UserModel.find({});
        if (!getUser) {
            res.status(404).send();
        }
        else {
            res.json(getUser);
        }
    });
}
exports.getUser = getUser;
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to get user by id', req.params.id);
        let getUser = yield user_1.UserModel.findById(req.params.id);
        if (!getUser) {
            res.status(404).send();
        }
        else {
            res.json(getUser);
        }
    });
}
exports.getUserById = getUserById;
function putUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to put user by id', req.params.id);
        const id = req.params.id;
        let userToPut = yield user_1.UserModel.findById(req.params.id);
        if (!userToPut) {
            res.status(404).send();
        }
        else {
            let update = Object.assign(Object.assign({}, userToPut.toObject()), req.body);
            let putUser = yield user_1.UserModel.updateOne({ _id: req.params.id }, update);
            console.log('fin');
            res.json(update);
        }
    });
}
exports.putUser = putUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to delete user by id', req.params.id);
        let deletedUser = yield user_1.UserModel.findByIdAndRemove(req.params.id);
        if (!deletedUser) {
            res.status(404).send();
        }
        else {
            res.json(deletedUser);
        }
    });
}
exports.deleteUser = deleteUser;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Request to add user :', req.body);
        let userToCreate = new user_1.UserModel(req.body);
        let createdUser = yield userToCreate.save();
        res.json(createdUser);
    });
}
exports.createUser = createUser;
