import Character from './Characters.model.js'
import Movie from './Movies.model.js'
import Genre from './Genres.model.js'
import User from './Users.model.js'

function createrelations(){
    /* Gender.hasMany(Movie,{
        as: 'movie',
        onUpdate: 'CASCADE'
    })
    Movie.hasOne(Gender,{
        as: 'gender',
        onUpdate: 'CASCADE'
    }) */
    //Movie.belongsToMany(Character,{through: 'CharacterMovies', as:'character', foreignKey: 'movieId', otherKey: 'characterId'})
    //Character.belongsToMany(Movie,{through:'CharacterMovies', as:'movie', foreignKey: 'characterId', otherKey: 'movieId'})
    /* const CharacterMovies = sequelize.define('CharacterMovies', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    },{timestamps:false}) */
    //Movie.belongsToMany(Character,{through: 'CharacterMovies'})
    //Character.belongsToMany(Movie,{through:'CharacterMovies'})
}

//createrelations()

const dataGenerator = async () => {
    /* let users = [
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
    ] */

    let characters = [
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/SDCC13_-_Ian_McKellen.jpg/440px-SDCC13_-_Ian_McKellen.jpg',
            name:'Ian McKellen',
            age:83,
            weight:70,
            movies:[1],
            biography:'English actor. His career spans seven decades, having performed in genres ranging from Shakespearean and modern theatre to popular fantasy and science fiction. Regarded as a British cultural icon, he has received various accolades, including seven Laurence Olivier Awards, a Tony Award, and a Golden Globe Award. The BBC states that his "performances have guaranteed him a place in the canon of English stage and film actors".'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_Bloom_Cannes_2013.jpg/440px-Orlando_Bloom_Cannes_2013.jpg',
            name:'Orlando Bloom',
            age:1,
            weight:5,
            movies:[1, 2],
            biography:`English actor. He made his breakthrough as the character Legolas in The Lord of the Rings film series The Fellowship of the Ring (2001), The Two Towers (2002), and The Return of the King (2003). He reprised his role in The Hobbit film series. He gained further notice appearing in epic fantasy, historical, and adventure films, notably as Will Turner in the Pirates of the Caribbean film series, The Curse of the Black Pearl (2003), Dead Man's Chest (2006), and At World's End (2007). `
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/b/b1/KeiraKnightleyByAndreaRaffin2011_%28cropped%29.jpg',
            name:'Keira Knightley',
            age:37,
            weight:70,
            movies:[2],
            biography:'English actress. Known for her work in both independent films and blockbusters, particularly period dramas, she has received several accolades, including nominations for two Academy Awards, three British Academy Film Awards, and a Laurence Olivier Award. In 2018, she was appointed an OBE at Buckingham Palace for services to drama and charity.'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg',
            name:'Johnny Depp',
            age:59,
            weight:70,
            movies:[2],
            biography:'American actor, producer, and musician. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for three Academy Awards and two BAFTA awards.'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Miranda_Cosgrove_2021.jpg/530px-Miranda_Cosgrove_2021.jpg',
            name:'Miranda Cosgrove',
            age:29,
            weight:70,
            movies:[3],
            biography:'omenzó su carrera a los tres años, haciendo anuncios televisivos. Su debut como actriz se produjo en 2002, interpretando a Summer Hathaway en la película musical School of Rock. Se dio a conocer en 2003 por su actuación como Megan Parker en la serie original de Nickelodeon, Drake & Josh.'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/6/6e/Nathan_Kress_2021.jpg',
            name:'Nathan Kress',
            age:29,
            weight:70,
            movies:[3],
            biography:'es un actor y director de cine estadounidense conocido por coprotagonizar la serie ICarly, interpretando a Freddie Benson'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Jennette_McCurdy_2012.jpg/440px-Jennette_McCurdy_2012.jpg',
            name:'Jennette McCurdy',
            age:30,
            weight:70,
            movies:[3],
            biography:'es una escritora, cantante, podcaster, y actriz estadounidense.1​2​ El papel de McCurdy como Sam Puckett en la comedia de situación iCarly (2007–2012'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Michael_J._Fox_2012_%28cropped%29.jpg/440px-Michael_J._Fox_2012_%28cropped%29.jpg',
            name:'Michael J. Fox',
            age:61,
            weight:70,
            movies:[4],
            biography:'más conocido como Michael J. Fox, es un exactor canadiense-estadounidense,1​2​ y ocasionalmente cantante y músico. Su carrera en el cine y la televisión comenzó a fines de los años 1970.'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Christopher_Lloyd_May_2015.jpg/440px-Christopher_Lloyd_May_2015.jpg',
            name:'Christopher Lloyd',
            age:83,
            weight:70,
            movies:[4],
            biography:'es un actor estadounidense. Ha interpretado a Doc Emmett Brown en la trilogía de Back to the Future (1985, 1989 y 1990), a Fester Addams en The Addams Family (1991) y Addams Family Values (1993), y al Juez Doom en ¿Quién engañó a Roger Rabbit? (1988).'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Lea_Thompson_February_2015_%28cropped%29.jpg/440px-Lea_Thompson_February_2015_%28cropped%29.jpg',
            name:'Lea Thompson',
            age:61,
            weight:70,
            movies:[4],
            biography:'es una actriz estadounidense conocida principalmente por su papel como Lorraine McFly en la trilogía Back to the Future además de por All the Right Moves con Tom Cruise. '
        },
        {
            image:' ',
            name:'',
            age:59,
            weight:70,
            movies:[],
            biography:' '
        },
    ]
    let movies = [
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tloftr-logo.svg/440px-Tloftr-logo.svg.png',
            title:'The Lord of the Rings',
            rating:5,
            genre:6
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png',
            title:'Pirates of the Caribbean',
            rating:5,
            genre:6
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ICarly_logo.svg/490px-ICarly_logo.svg.png',
            title:'iCarly',
            rating:5,
            genre:2
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Back_to_the_Future_film_series_logo.png/440px-Back_to_the_Future_film_series_logo.png',
            title:'Back to the Future',
            rating:5,
            genre:6
        },
        {
            image:'',
            title:'',
            rating:5
        },

    ]

    let image = 'https://picsum.photos/200/300'
    let genres = [
        {name:'crime',image},{name:'comedy',image},{name:'animation',image},
        {name:'tragedy',image},{name:'thriller',image},{name:'adventure',image},
        {name:'mystery',image},{name:'action',image},{name:'romance',image}]

    // insert data
    //await User.bulkCreate(users)
    //await Gender.bulkCreate(genders)
    //await Character.bulkCreate(characters)
    //await Movie.bulkCreate(movies)

    // create relations
    /* let movie = await Movie.findByPk(1)
    let actor = await Character.create(
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jonathan_Pryce_Cannes_2018.jpg/400px-Jonathan_Pryce_Cannes_2018.jpg',
            name:'Jonathan Pryce',
            age:75,
            weight:73,
            biography:'',
        }
    )
    console.log(movie)
    actor.addMovie(movie)*/
    //let result = await Gender.findByPk(1)


    /* let gender =  await Gender.create({name:'crime',image})

    let movie =await Movie.create(
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Tloftr-logo.svg/440px-Tloftr-logo.svg.png',
            title:'The Lord of the tutututu',
            rating:5,
            GenderId:gender.dataValues.id
        })
    
        console.log(movie)
     */
    /* await Character.create(
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jonathan_Pryce_Cannes_2018.jpg/400px-Jonathan_Pryce_Cannes_2018.jpg',
            name:'Jonathan popoppopop',
            age:75,
            weight:73,
            biography:'',
        }).then(character =>{
            character.addMovies(movie)

        })
        console.log('movie',movie)
        console.log('character',character) */
    
    /* console.log(lord)

    console.log(jhony)
    jhony.addMovies(lord) */
}


//dataGenerator()

export {Character, Movie, Genre, User}