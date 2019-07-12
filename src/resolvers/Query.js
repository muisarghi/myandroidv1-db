

function getAllLomba(parent, args, context, info) {
    //return context.prisma.lombas()
	return context.db.query.lombas({ }, info)
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

function getAllFile(parent, args, context, info) {
    return context.prisma.files()
}

module.exports = {
    getAllLomba,
	getLombaDesc,
	getDiskusiDesc,
	getBeritaDesc,
    getAllComment,
	getAllBerita,
    getAllDiskusi,
	searchUser,
    getAllFile
}