const bcrypt = require('../../node_modules/bcryptjs')
const jwt = require('../../node_modules/jsonwebtoken')
const { APP_SECRET, getUserId } = require('./Utils')

function getAllLomba(parent, args, context, info) {
    //return context.prisma.lombas()
	return context.db.query.lombas({ },  info)
}

function countLomba(parent, args, context, info) {
	//const userId = getUserId(context)
    //return context.prisma.lombas()
	//return context.db.query.lombasConnection({ where:{user:{id: userId}}}, info)
	//return context.db.query.lombasConnection({ }, info)
	//const agg = context.db.query.lombasConnection({}, '{aggregate {count}}', info);
	//return { agg }
	return context.db.query.lombasConnection({ },  info)
}

function getLombaDesc(parent, args, context, info) {
    //return context.prisma.lombas()
	return context.db.query.lombas({orderBy: args.orderBy }, info)
}

function getBeritaDesc(parent, args, context, info) {
    //return context.prisma.lombas()
	return context.db.query.beritas({orderBy: args.orderBy }, info)
}

function getDiskusiDesc(parent, args, context, info) {
    //return context.prisma.lombas()
	return context.db.query.diskusis({orderBy: args.orderBy }, info)
}


function getAllComment(parent, args, context, info) {
    return context.prisma.comments()
}

function getAllDiskusi(parent, args, context, info) {
    //return context.prisma.diskusis()
	return context.db.query.diskusis({ }, info)
}

function getAllBerita(parent, args, context, info) {
    //return context.prisma.diskusis()
	return context.db.query.beritas({ }, info)
}

function searchUser(parent, args, context, info) {
    //return context.prisma.diskusis()
	return context.db.query.users({ where:{nama:args.searchNama}, orderBy: args.orderBy}, info)
}

function getUser(parent, args, context, info) {
    //return context.prisma.diskusis()
	return context.db.query.users({ where:{email:args.email}}, info)
}

function getAllFile(parent, args, context, info) {
    return context.prisma.files()
}

function user(parent, args, context, info) {
    const userId = getUserId(context)

    //return context.prisma.user({ id: userId })
	return context.db.query.users({ }, info)
}

async function getUserIdQuery(parent, args, context, info) {
    return getUserId(context)
}

//async function Authpayload ({ user: { userId } }, args, context, info)
//{
  //  return context.db.query.users({ where: { userId } }, info)
//}

module.exports = {
	user,
	getUser,
	getUserIdQuery,
    getAllLomba,
	getLombaDesc,
	getDiskusiDesc,
	getBeritaDesc,
    getAllComment,
	getAllBerita,
    getAllDiskusi,
	searchUser,
    getAllFile,
	countLomba
}