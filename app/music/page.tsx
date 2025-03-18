import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import BandcampEmbed from '@/components/BandcampEmbed';
import ContentSection from '@/components/ContentSection';

const MusicPage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="Play that Funky Music" 
        teaser={
          <>
          I&apos;ve never been described as being a funky player, but I can hold down a decent groove. I primarily play bass but I also sing, write songs, and play a little guitar.
          </>
        }
        longDesc={
          <>
          Most of the examples below are from projects where I play bass, but there are also a few examples from my singer/songwriter attempts. I&apos;ve always been lucky to play with musicians that are beyond my ability. You can find a list of credits for all the other musicians on the individual <a href="https://bandcamp.com/" target="_blank" className="text-blue-500">bandcamp</a> pages below.
          </>
        }
      />

      <div className="p-8">
      <ContentSection
        title="Spacecramp"
        shortDescription="Spacecramp is an instrumental project that I work on with a several friends. The concept is to compose and record all of the songs on the album in a single day. As you can imagine the days are long and often last from 12 to 15 hours. This is a project that tries not to take itself too seriously but at the same time produces some music we enjoy. "
        longDescription="To date we've done four albums, three of which has been fully mixed and mastered. I play bass on all of the tracks and these are some of my favorites off of each album."
      />
      <BandcampEmbed
        embeds={[
          "https://bandcamp.com/EmbeddedPlayer/album=860763317/size=small/bgcol=ffffff/linkcol=0687f5/track=2408201347/transparent=true/",
          "https://bandcamp.com/EmbeddedPlayer/album=860763317/size=small/bgcol=ffffff/linkcol=0687f5/track=772562278/transparent=true/",
          "https://bandcamp.com/EmbeddedPlayer/album=3403611865/size=small/bgcol=ffffff/linkcol=0687f5/track=2764066335/transparent=true/",
          "https://bandcamp.com/EmbeddedPlayer/album=3403611865/size=small/bgcol=ffffff/linkcol=0687f5/track=672254152/transparent=true/",
          "https://bandcamp.com/EmbeddedPlayer/album=2475938613/size=small/bgcol=ffffff/linkcol=0687f5/track=2071646682/transparent=true/",
          "https://bandcamp.com/EmbeddedPlayer/album=2475938613/size=small/bgcol=ffffff/linkcol=0687f5/track=4161428038/transparent=true/"
        ]}
      />
      </div>  

      <div className="p-8">
      <ContentSection
        title="The Rotary Prophets"
        shortDescription="This was my first and only attempt at being a singer/songwriter, more of a cathartic endeavor than anything else. All of these songs are about a decade old."
        longDescription="The band was born out of a mashup of other bands I was playing in at the time. We found ourselves without a primary songwriter so I tried my hand at that role."
      />
      <BandcampEmbed
        embeds={[
          "https://bandcamp.com/EmbeddedPlayer/album=2214505322/size=small/bgcol=ffffff/linkcol=0687f5/track=2369543150/transparent=true/",
          "https://bandcamp.com/EmbeddedPlayer/album=3537492565/size=small/bgcol=ffffff/linkcol=0687f5/track=1706074065/transparent=true/",
          "https://bandcamp.com/EmbeddedPlayer/album=2214505322/size=small/bgcol=ffffff/linkcol=0687f5/track=3766118801/transparent=true/"
        ]}
      />
      </div>


      <div className="p-8">
      <ContentSection
        title="Battuto"
        shortDescription="This is another album I played bass on and again these are a few of my favorite tracks."
        longDescription="In the artist's own words...'Battuto is a blend of herbs and spices in Italian cooking generally used as a sauce foundation. An Italian mirepoix. This album was a year in the making, and conceptualized by Joe Pleiman and Jay DiBiasio.'"
      />
      <BandcampEmbed
        embeds={[
          "https://bandcamp.com/EmbeddedPlayer/album=1327650065/size=small/bgcol=ffffff/linkcol=0687f5/track=2321117965/transparent=true/",
          "https://bandcamp.com/EmbeddedPlayer/album=1327650065/size=small/bgcol=ffffff/linkcol=0687f5/track=2861806909/transparent=true/"
        ]}
      />
      </div>





    </div>
  );
  
};

export default MusicPage;