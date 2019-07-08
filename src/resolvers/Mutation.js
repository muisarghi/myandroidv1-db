//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
//const { APP_SECRET, getUserId } = require('./Utils')

async function signup(parent, args, context, info) {

    //const password = await bcrypt.hash(args.password, 10)
	const password = (args.password)
    const user = await context.prisma.createUser({ ...args, password })
    //const token = jwt.sign({ userId: user.id }, APP_SECRET)
	const token = ({ userId: user.id })
    return {
        token,
        user,
    }
}

async function login(parent, args, context, info) {

    const user = await context.prisma.user({ email: args.email })
    if (!user) {
        throw new Error('No such user found')
    }

    //const valid = await bcrypt.compare(args.password, user.password)
    //if (!valid) {
      //  throw new Error('Invalid password')
    //}

    //const token = jwt.sign({ userId: user.id }, APP_SECRET)
	const token = ({ userId: user.id })
    return {
        token,
        user,
    }
}


async function createComment(parent, args, context, info) {
    const userId = getUserId(context)

    return context.prisma.createComment({
        createdAt: args.timeStamp,
        text: args.text,
        writtenBy: { connect: { id: userId } },
    })
}

async function createLomba(parent, args, context, info) {
    //const userId = getUserId(context)
	//return context.db.query.lombas({ }, info)
    return context.prisma.createLomba({
	//return context.db.mutation.createLomba({
        lomba: args.lomba,
		ketlomba: args.ketlomba,
    })
}

async function createDiskusi(parent, args, context, info) {
    const userId = getUserId(context)

    return context.prisma.createDiskusi({
        createdAt: args.timeStamp,
        judul: args.judul,
		isi: args.isi,
		writtenBy: { connect: { id: userId } },
    })
}


module.exports = {
    signup,
    login,
	createComment,
	createLomba,
	createDiskusi
}