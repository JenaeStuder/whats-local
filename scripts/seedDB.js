import * as mongoose from "mongoose";
import * as db from "../models";

// This file empties the Books collection and inserts the artists below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/whatslocal");

const artistSeed = [
  {
    username: "test001",
    password: "test001",
    email: "test001@test.com",
    firstName: "yada",
    lastName: "yada",
    socialMediaHandles: { twitter: "@test" },
    profilePicture:
      "https://ewedit.files.wordpress.com/2017/08/tsdjets_ec004_h.jpg",
    bio: "the is a test bio"
  },
  {
    username: "_jakehines",
    password: "jakehines",
    email: "jakehines@test.com",
    firstName: "Jake",
    lastName: "Hines",
    socialMediaHandles: { twitter: "@_jakehines", instagram: "@_jakehines" },
    profilePicture:
      "https://instagram.fphx1-2.fna.fbcdn.net/vp/55140301ec4ee61676168739c67698c1/5D76D3F2/t51.2885-15/e35/50543188_132396994465784_8285921942158021961_n.jpg?_nc_ht=instagram.fphx1-2.fna.fbcdn.net",
    bio: "tb. 1997. Photographer based in Tempe, AZ"
  },
  {
    username: "artie_choke",
    password: "artiebradic",
    email: "artiebradic@test.com",
    firstName: "Artie",
    lastName: "Bradic",
    socialMediaHandles: { twitter: "@artie_choke", instagram: "@artie_choke" },
    profilePicture:
      "https://instagram.fphx1-2.fna.fbcdn.net/vp/5c3d4f35087b43b35b66a0d1d39d8329/5D713AF5/t51.2885-15/e35/33881653_365034933983499_3063554679943200768_n.jpg?_nc_ht=instagram.fphx1-2.fna.fbcdn.net",
    bio: "some art i made."
  },
  {
    username: "SammyStock",
    password: "sammystock",
    email: "sammystock@test.com",
    firstName: "Sammy",
    lastName: "Stock",
    socialMediaHandles: {},
    profilePicture:
      "https://images.pexels.com/photos/1486470/pexels-photo-1486470.jpeg",
    bio:
      "Please contact me for any woodworking commissions in the Phoenix area!"
  },
  {
    username: "graffiti_by_Josh",
    password: "joshpenn",
    email: "joshpenn@test.com",
    firstName: "Josh",
    lastName: "Penn",
    socialMediaHandles: {},
    profilePicture:
      "https://images.pexels.com/photos/1152188/pexels-photo-1152188.jpeg",
    bio: "Hello there, I specialize in public artwork. From Gilbert, AZ"
  },
  {
    username: "Axel",
    password: "axelsey",
    email: "axelsey@test.com",
    firstName: "Axel",
    lastName: "Sey",
    socialMediaHandles: {},
    profilePicture:
      "https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg",
    bio: "Phoenix drummer. Kind of in a band. Check out our shows here:"
  },
  {
    username: "BooBootheFool",
    password: "bobfool",
    email: "bobfool@test.com",
    firstName: "Bob",
    lastName: "Fool",
    socialMediaHandles: {},
    profilePicture:
      "https://images.pexels.com/photos/1227488/pexels-photo-1227488.jpeg",
    bio: "I'm BooBoo the Fool!"
  },
  {
    username: "BeckyGoodair",
    password: "beckygoodair",
    email: "beckygoodair@test.com",
    firstName: "Becky",
    lastName: "Goodair",
    socialMediaHandles: {},
    profilePicture:
      "https://images.pexels.com/photos/1415268/pexels-photo-1415268.jpeg",
    bio: "Take only memories. Leave only footprints"
  }
];
