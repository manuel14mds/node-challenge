import { fileURLToPath } from 'url'
import { dirname } from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const dataGenerator = async () => {
    let users = [
        {
            userName:'Manuel Florez',
            email:'manuel14mds@gmail.com',
            password:'qwerty'
        },
        {
            userName:'Adriana Matos',
            email:'adry@gmail.com',
            password:'qwertyu'
        }
    ]

    /* let characters = [
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/SDCC13_-_Ian_McKellen.jpg/440px-SDCC13_-_Ian_McKellen.jpg',
            name:'Ian McKellen',
            age:83,
            weight:70,
            biography:'English actor. His career spans seven decades, having performed in genres ranging from Shakespearean and modern theatre to popular fantasy and science fiction. Regarded as a British cultural icon, he has received various accolades, including seven Laurence Olivier Awards, a Tony Award, and a Golden Globe Award. The BBC states that his "performances have guaranteed him a place in the canon of English stage and film actors".'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_Bloom_Cannes_2013.jpg/440px-Orlando_Bloom_Cannes_2013.jpg',
            name:'Orlando Bloom',
            age:1,
            weight:5,
            biography:`English actor. He made his breakthrough as the character Legolas in The Lord of the Rings film series The Fellowship of the Ring (2001), The Two Towers (2002), and The Return of the King (2003). He reprised his role in The Hobbit film series. He gained further notice appearing in epic fantasy, historical, and adventure films, notably as Will Turner in the Pirates of the Caribbean film series, The Curse of the Black Pearl (2003), Dead Man's Chest (2006), and At World's End (2007). `
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/b/b1/KeiraKnightleyByAndreaRaffin2011_%28cropped%29.jpg',
            name:'Keira Knightley',
            age:37,
            weight:70,
            biography:'English actress. Known for her work in both independent films and blockbusters, particularly period dramas, she has received several accolades, including nominations for two Academy Awards, three British Academy Film Awards, and a Laurence Olivier Award. In 2018, she was appointed an OBE at Buckingham Palace for services to drama and charity.'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg',
            name:'Johnny Depp',
            age:59,
            weight:70,
            biography:'American actor, producer, and musician. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for three Academy Awards and two BAFTA awards.'
        },
    ]
    let movies = [
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tloftr-logo.svg/440px-Tloftr-logo.svg.png',
            title:'The Lord of the Rings',
            rating:5
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png',
            title:'Pirates of the Caribbean',
            rating:5
        }
    ]
    let image = 'https://picsum.photos/200/300'
    let genders = [
        {name:'crime',image},{name:'comedy',image},{name:'animation',image},
        {name:'tragedy',image},{name:'thriller',image},{name:'adventure',image},
        {name:'mystery',image},{name:'action',image},{name:'romance',image}]
 */
    // insert data
    await User.bulkCreate(users)
    await Character.bulkCreate(characters)
    await Movie.bulkCreate(movies)
    await Gender.bulkCreate(genders)

    // create relations



}

export default __dirname