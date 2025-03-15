
import logo from './logo.jpeg'
import disin_logo from './disin_logo.png'
import group_profiles from './group_profiles.png'
import john from './john.jpg'
import card_img from './card_img.png'
import about_image from './about_image.png'
import header_img from './header_img.png'
import dropdow_icon from './dropdow_icon.png'
import about_head_image from './about_head_image.png'
import contact_us from './contact_us.png'
import contact from './contact.png'
import arrow_icon from './arrow_icon.svg'
import verified_icon from './verified_icon.png'
import info_icon from './info_icon.png'
import covid_image from './covid_image.png'
import Dermatologist from './Dermatologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import General_physician from './General_physician.png'
import Gynecologist from './Gynecologist.png'
import Neurologist from './Neurologist.png'
import Pediatricians from './Pediatricians.png'
import doc from './doc.png'
import boja_photo from './boja_photo.png'
import my_photo from './my_photo.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png' 
import doc10 from './doc10.png' 
import doc11 from './doc11.png' 
import doc12 from './doc12.png' 
import doc13 from './doc13.png' 
import doc14 from './doc14.png' 

export const assets = {
  logo,
  john, 
  about_image,
  card_img,
  about_head_image,
  contact_us,
  contact,
  dropdow_icon,
  group_profiles,
  arrow_icon,
  disin_logo,
  verified_icon,
  info_icon,
  header_img,
  covid_image,
  General_physician,
  Dermatologist,
  Gastroenterologist,
  Gynecologist,
  Neurologist,
  Pediatricians,

  doc,
  boja_photo,
  my_photo,
  doc2,
  doc3,
  doc4,
  doc5,
  doc6,
  doc7,
  doc8,
  doc9,
  doc10,
  doc11,
  doc12,
  doc13,
  doc14,
  
}

export const specialityData = [
  {
    speciality: 'General_physician',
    image: General_physician
  },
  {
    speciality: 'Gynecologist',
    image: Gynecologist
  },
  {
    speciality: 'Dermatologist',
    image: Dermatologist
  },
  {
    speciality: 'Pediatricians',
    image: Pediatricians
  },
  {
    speciality: 'Neurologist',
    image: Neurologist
  },
  {
    speciality: 'Gastroenterologist',
    image: Gastroenterologist
  },
]
export const doctors = [
  {
      _id: 'doc',
      name: 'Dr. Richard James',
      image: doc,
      speciality: 'General pysician',
      degree: 'MBBS',
      experience: '5 Years',
      about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
      fees: 50,
      address: {
          line1: '17th Cross, Richmond',
          line2: 'Tarobiy, Ring Road, Tashkent'
      }
  },
  {
      _id: 'doc7',
      name: 'Dr. Namozova Masturaxon',
      image: doc7,
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
      fees: 60,
      address: {
          line1: '10th Cross, Tolistoy',
          line2: 'Qashqirlar, A.Temur Road, Samarkhand'
      }
  },
  {
      _id: 'my_photo',
      name: 'Dr. Pirmatov Sobirjon',
      image: my_photo,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '2 Years',
      about: 'Dr.Buronov harakatchan inson.',
      fees: 40,
      address: {
          line1: '1th home, Sh. Rashidov',
          line2: 'Bobur, A.Shohzamon Road, Bukhara'
      }
  },
  {
      _id: 'doc4',
      name: 'Dr. Emiliya Larson',
      image: doc4,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '5 Years',
      about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
      fees: 50,
      address: {
          line1: '10th Cross, Tolistoy',
          line2: 'Circle, Kong Road, Sweden'
      }
  },
  {
      _id: 'doc5',
      name: 'Dr. Azamov Bakhovuddin',
      image: doc5,
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '10 Years',
      about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
      fees: 80,
      address: {
          line1: '10th Cross, Tolistoy',
          line2: 'Young, Sejong Tewang Road, Navoi'
      }
  },
  {
      _id: 'doc6',
      name: 'Dr. Emiliya Larson',
      image: doc6,
      speciality: 'Gastroenterologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
      fees: 55,
      address: {
          line1: '10th Cross, Tolistoy',
          line2: 'Young, Sejong Tewang Road, S.Korea'
      }
  },
  {
      _id: 'doc7',
      name: 'Dr. Khalilov Hamza',
      image: doc7,
      speciality: 'Cardiologist',
      degree: 'MBBS',
      experience: '5 Years',
      about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
      fees: 75,
      address: {
          line1: '1th Cross, Yoshlar',
          line2: 'Yashnobod Road, Uzbekistan'
      }
  },
  {
    _id: 'doc8',
    name: 'Dr. Khalilov Hamza',
    image: doc8,
    speciality: 'Cardiologist',
    degree: 'MBBS',
    experience: '5 Years',
    about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
    fees: 75,
    address: {
        line1: '1th Cross, Yoshlar',
        line2: 'Yashnobod Road, Uzbekistan'
    }
},
{
  _id: 'doc9',
  name: 'Dr. Khalilov Hamza',
  image: doc9,
  speciality: 'Cardiologist',
  degree: 'MBBS',
  experience: '5 Years',
  about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
  fees: 75,
  address: {
      line1: '1th Cross, Yoshlar',
      line2: 'Yashnobod Road, Uzbekistan'
  }
},
{
  _id: 'doc10',
  name: 'Dr. Khalilov Hamza',
  image: doc10,
  speciality: 'Cardiologist',
  degree: 'MBBS',
  experience: '5 Years',
  about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
  fees: 75,
  address: {
      line1: '1th Cross, Yoshlar',
      line2: 'Yashnobod Road, Uzbekistan'
  }
},
{
  _id: 'doc11',
  name: 'Dr. Khalilov Hamza',
  image: doc11,
  speciality: 'Cardiologist',
  degree: 'MBBS',
  experience: '5 Years',
  about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
  fees: 75,
  address: {
      line1: '1th Cross, Yoshlar',
      line2: 'Yashnobod Road, Uzbekistan'
  }
},
{
  _id: 'doc12',
  name: 'Dr. Khalilov Hamza',
  image: doc12,
  speciality: 'Cardiologist',
  degree: 'MBBS',
  experience: '5 Years',
  about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
  fees: 75,
  address: {
      line1: '1th Cross, Yoshlar',
      line2: 'Yashnobod Road, Uzbekistan'
  }
},
{
  _id: 'doc13',
  name: 'Dr. Khakimova Dinora',
  image: doc13,
  speciality: 'Cardiologist',
  degree: 'MBBS',
  experience: '5 Years',
  about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
  fees: 75,
  address: {
      line1: '1th Cross, Yoshlar',
      line2: 'Yashnobod Road, Uzbekistan'
  }
},
{
  _id: 'doc14',
  name: 'Dr. Khalilov Hamza',
  image: doc14,
  speciality: 'Cardiologist',
  degree: 'MBBS',
  experience: '5 Years',
  about: 'Dr.Davis has a strong commitment to delivering comprehensive medical carer',
  fees: 75,
  address: {
      line1: '1th Cross, Yoshlar',
      line2: 'Yashnobod Road, Uzbekistan'
  }
},
 ]