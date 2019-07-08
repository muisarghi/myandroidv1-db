

function getAllLomba(parent, args, context, info) {
    //return context.prisma.lombas()
	return context.db.query.lombas({ }, info)
}

function getAllComment(parent, args, context, info) {
    return context.prisma.comments()
}

function getAllDiskusi(parent, args, context, info) {
    //return context.prisma.diskusis()
	return context.db.query.diskusis({ }, info)
}

function getAllFile(parent, args, context, info) {
    return context.prisma.files()
}

module.exports = {
    getAllLomba,
    getAllComment,
    getAllDiskusi,
    getAllFile
}