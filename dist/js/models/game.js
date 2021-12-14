"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = exports.gameSchema = void 0;
const mongoose_1 = require("mongoose");
exports.gameSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    addedAt: { type: Date, default: () => new Date() },
    addedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }
});
exports.GameModel = (0, mongoose_1.model)('Game', exports.gameSchema);
