//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
//const { APP_SECRET, getUserId } = require('./Utils')
const bcrypt = require('../../node_modules/bcryptjs')
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

/*
async function createLomba (context, { lomba, ketlomba }) {
      return context.prisma.createLomba({
        lomba,
        ketlomba,
      })
		}
		*/

async function createUser(parent, args, context, info) {
    const passwordx = await bcrypt.hash(args.password, 10)
		
	return context.db.mutation.createUser({data:{
    nama: args.nama,
	alamat: args.alamat,
	email: args.email,
	nohp: args.nohp,
	biografi: args.biografi,
	password: passwordx,
    }}, info)
}
	
async function createLomba(parent, args, context, info) {
    //const userId = getUserId(context)
	//return context.db.query.lombas({ }, info)
	
    //return context.db.mutation.createLomba(
	//{lomba: args.lomba,
		//ketlomba: args.ketlomba }, info)
		
	return context.db.mutation.createLomba({data:{
    lomba: args.lomba,
	ketlomba: args.ketlomba,
    }}, info)
}




async function createDiskusi(parent, args, context, info) {
    /*
	const userId = getUserId(context)

    return context.prisma.createDiskusi({
        createdAt: args.timeStamp,
        judul: args.judul,
		isi: args.isi,
		writtenBy: { connect: { id: userId } },
    })
	*/
	return context.db.mutation.createDiskusi({data:{
    judul: args.judul,
	isi: args.isi,
    }}, info)
}


async function createBerita(parent, args, context, info) {
   
	return context.db.mutation.createBerita({data:{
    headline: args.headline,
	berita: args.berita,
    }}, info)
}

module.exports = {
    signup,
    login,
	createComment,
	createLomba,
	createDiskusi,
	createBerita,
	createUser
}