"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Diskusi",
    embedded: false
  },
  {
    name: "Lomba",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "AuthPayload",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/lovebirdcom/lovebird/lovebird`
});
exports.prisma = new exports.Prisma();
