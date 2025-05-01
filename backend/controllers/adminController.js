import validator from 'validator'
import bcrypt from 'bcrypt'
import cloudinary from '../config/cloudinary.js'
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'

// API for adding doctor
const addDoctor = async (req, res) => {
  try { 

    const {name, email, password, speciality, degree, experience, about, fees, address } = req.body
    const imageFile = req.file

    // checking  for all data to add doctor
    if (!name || !email || !password ||  !speciality || !degree || !experience || !about || !fees || !address ){
      return res.json({success: false, message: "Missing Details"})
    }

    // validating email format validator - xatolikni check qilish:
    if (!validator.isEmail(email)) { // valid formatda emailga request yuborilganda email mavjud bulmasa. 
      return res.json({success: false, message: "Please enter a valid email"}) // valid emilni kiritishni suraydi xatolikda.
    }

    // validation strong passwordni tekshiramiz.
    if (password.length < 8) {
      return res.json({success: false, message: "Please enter a strong password"})
    }

    // imageFIle
    if(!imageFile) {
      return res.json({success: fales, message: "Image file is missing"})
    }
    // hashing doctor password
    const salt = await bcrypt.genSalt(10) //bir xil parolni tanlasanggiz ham boshqalarnikidan farqlab beradi.
    const hashedPassword = await bcrypt.hash(password, salt) // user parolini mtn kurinishidan shifrlangan kurinishda beradi.

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type:"image"
    })
    const imageUrl = imageUpload.secure_url


    const  doctorDate = {
      name,
      email,
      image:imageUrl,
      password:hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: typeof address === "string" ? JSON.parse(address) : address,
      data:Date.now()
    }

    const newDoctor = new doctorModel(doctorDate)
    await newDoctor.save()

    res.json({success: true, message: "Doctor Added Successfully"})
    
  } catch(error) {
    console.log(error)
    res.json({success:false, message:error.message})

  }
}
///////////////////////////////////////// API for Admin login ////////////////////////////

const loginAdmin = async (req, res) => {
  try {
     
    const { email, password } = req.body
    console.log('Request body:', req.body);

    if(email === process.env.ADMIN_EMAIL  && password === process.env.ADMIN_PASSWORD) {

       const token = jwt.sign( email+password, process.env.JWT_SECRET)
      return res.json({success: true, token})
    } else {
      res.json({success: false, message: "Invalid credentials"})
 
    }

  } catch (error) {
     console.log(error)
     res.json({success: false, message: error.message})
  }
}


export  {addDoctor,loginAdmin}