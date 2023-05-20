import PoemSection from '../components/PoemSection'
import Prince from '../images/King Prince.jpg'
import Kanana from '../images/kanana.jpg'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './poems.css'

const Poems = () =>  {
    return (<>
        <NavBar /> 
            <div className='main-body'>
             < PoemSection title="Mirror" poem="My era's obscuring mirror 
        shattered 
        because it magnified the small 
        and made the great seem insignificant. 
        Dictators and monsters filled its contours." name="Prince" img={Prince}/>
        <PoemSection name="Kanana" title="What If" poem="What if we're all held up in some evil,
        Which will never let go of our poor souls-
        Which perhaps will haunt us till eternity. 
        What if we live to die each day;
        Die,both emotionally and mentally, 
        Die a million times before our actual death-
        before we even learn how to live on earth. 
        What if death is only for the righteous, 
        as in Isaiah 57:1-2;
        and everlasting life for all?
        Then the wicked would find pleasure in their wrong dids.
        Sounds weird, right?
        But what if?" img={Kanana} />
        
        <PoemSection name="prince" title="Old Photographs" poem="On my desk is a photograph of you 
        taken by the woman who loved you then. 
        
        In some photos her shadow falls 
        in the foreground. In this one,  
        her body is not that far from yours. 
        
        Did you hold your head that way 
        because she loved it?" img={Prince} />
        <PoemSection name="Kanana" title="Aliens" poem="What if!
        What if we're aliens in our own sight,
        We fail to retrace our ways when lost,
        We can’t even find ourselves, 
        We always feel lost,
        Even when standing in front of the mirror. 
        We present our unreal colors to the world,
        Colors that doesn't even exist 
        
        What if our days on earth are like a shadow,
        A shadow without hope as in 1 chronicles 20:15.
        What if we live to die each day-
        both emotionally and psychologically, 
        hopping to see a dawn  that will never come .
        What if we are like mist, as in James 4:14-
        that we appear for a short while;
        then we vanish within no time, 
        Towards unknown destinations.
        " img={Kanana} />
        <PoemSection name="prince" title="Upon a Child That Died" poem="Here she lies, a pretty bud,
        
        Lately made of flesh and blood,
        
        Who as soon fell fast asleep
        
        As her little eyes did peep.
        
        Give her strewings, but not stir
        
        The earth that lightly covers her." img={Prince} />
        <PoemSection name="Kanana" title="Karma" poem="What if karma resigned -
        Letting our good dids remain unrewarded.
        What is karma is a mere visitor?
        Who some of us scold and chase away.
        What if,
        Friends we love most are excluded in our future,
        They are just destiny helpers -
        who'll soon turn to strangers;
        because our destinies didn't entwine .
        Time teared us apart,
        With so many lessons learnt-
        and unforgettable memories kept.
        What if,
        Fate can be questioned?
        We'd all question it about our destinies,
        and about all the reasons behind our misfortunes.
        Sounds weird, right? but what if? " img={Kanana} />
        <PoemSection name="prince" title="Minstrel Man" poem="Because my mouth 
        Is wide with laughter
        And my throat
        Is deep with song,
        You do not think 
        I suffer after 
        I have held my pain 
        So long." img={Prince} />
        <PoemSection name="prince" title="The Sick Rose" poem="Has found out thy bed
        
        Of crimson joy:
        
        And his dark secret love
        
        Does thy life destroy." img={Prince} />
        <PoemSection name="prince" title="The Raven" poem="Deep into that darkness peering, long I stood there wondering, fearing,
        
        Doubting, dreaming dreams no mortal ever dared to dream before;
        
            But the silence was unbroken, and the stillness gave no token,
        
            And the only word there spoken was the whispered word, “Lenore?”
        
        This I whispered, and an echo murmured back the word, “Lenore!”—
        
                    Merely this and nothing more." img={Prince} />
        <PoemSection name="prince" title="Windigo" poem="You knew I was coming for you, little one,
        
        when the kettle jumped into the fire.
        
        Towels flapped on the hooks,
        
        and the dog crept off, groaning,
        
        to the deepest part of the woods." img={Prince} />
        <PoemSection name="prince" title="I felt a Funeral, in my Brain" poem="I felt a Funeral, in my Brain,
        
        And Mourners to and fro
        
        Kept treading - treading - till it seemed
        
        That Sense was breaking through -" img={Prince} />
        <PoemSection name="prince" title="The Vampire" poem="She rose among us where we lay. 
        She wept, we put our work away. 
        She chilled our laughter, stilled our play; 
        And spread a silence there. 
        And darkness shot across the sky, 
        And once, and twice, we heard her cry; 
        And saw her lift white hands on high 
        And toss her troubled hair. 
        
        What shape was this who came to us, 
        With basilisk eyes so ominous, 
        With mouth so sweet, so poisonous, 
        And tortured hands so pale? 
        We saw her wavering to and fro, 
        Through dark and wind we saw her go; 
        Yet what her name was did not know; 
        And felt our spirits fail." img={Prince} />
        <PoemSection name="prince" title="Nothing but Death" poem="There are cemeteries that are lonely,
        graves full of bones that do not make a sound,
        the heart moving through a tunnel,
        in it darkness, darkness, darkness,
        like a shipwreck we die going into ourselves,
        as though we were drowning inside our hearts,
        as though we lived falling out of the skin into the soul." img={Prince} />
        <PoemSection name="prince" title="Acquainted with the Night" poem="I have been one acquainted with the night.
        
        I have walked out in rain—and back in rain.
        
        I have outwalked the furthest city light.
        
        
        
        I have looked down the saddest city lane.
        
        I have passed by the watchman on his beat
        
        And dropped my eyes, unwilling to explain." img={Prince} />
        
        
        
        
        <PoemSection name="Prince" title="Love Sonnets" poem="I crave your mouth, your voice, your hair. Silent and starving, I prowl through the streets. Bread does not nourish me, dawn disrupts me, all day I hunt for the liquid measure of your steps." img={Prince} />
        <PoemSection name="Prince" title="The True Bride" poem="Once in civics class, he touched my blouse like it was a page he wanted to turn. For a second, I went transparent, lightheaded: a whiff of helium or ether, a sheet of tracing paper or a tea leaf; slight as the exhalation it takes to say my name." img={Prince} />
        <PoemSection name="Prince" title="At The Beach" poem="The beach was deserted
        And silent
        But for the gentle breaking of the waves
        They were both naked
        Her on her knees looking out to sea
        He knelt behind her in the moonlight
        Smelling her hair before nuzzling her neck
        His hands were on her ample hips
        His nuzzles turned to kisses
        As his finger tips brushed
        The soft flesh of her nakedness
        His hands slid upwards across her silky skin
        To caress the cupola’s of her breasts
        And as his fingers teased her swelling mamilla
        She turned her head toward him
        And their mouths met
        In wet hungry consumption
        As passion intensified
        He slid one hand slowly down across her belly
        Fingers dallying briefly
        In the lushness of her bush
        Before finding the moist recess he sought
        Her fervid response to his fingering
        Brought her to the brink
        And then bending her at the waist
        He quickly pushed her forward  
        Until her head touched the sand
        This presented her round buttocks to him
        So he could see her open lipped pudendum
        Glistening moistly in the moonlight
        He slid his hands up and cupped her
        Pendulous breasts
        Caressing breast and teat
        As he penetrated her heat" img={Prince} />
        <PoemSection name="Prince" title="What Does It Mean" poem="What does it mean to want an age-old call
        for change
        not to change
        
        and yet, also,
        to feel bullied
        by the call to change?
        
        How is a call to change named shame,
        named penance, named chastisement?
        
        How does one say
        
        what if
        
        without reproach? The root
        
        of chastise is to make pure.
        The impossibility of that—is that
        what repels and not
        
        the call for change?" img={Prince} />
            </div>
            <Footer /> 
            </>
          )
}

export default Poems
