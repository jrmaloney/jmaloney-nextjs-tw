import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import BandcampEmbed from '@/components/BandcampEmbed';
import ContentSection from '@/components/ContentSection';

const MusicPage = () => {
  return (
    <div className="container mx-auto p-8">
      <HeroBanner 
        title="Play that Funky Music" 
        longDesc="Actually, I've never been described as being a funky player but I can hold down a decent groove. I mostly play bass but I also do some songwriitng and singing.  There are few examples below from my singer/songwriter attempts."
      />

      <div className="p-8">
      <ContentSection
        title="Spacecramp"
        shortDescription="Spacecramp is an instrumental project that I work on with a several friends. The concept is to compose and record all of the songs on the album in a single day. As you can imagine the days are long and often last from 12 to 15 hours."
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
        title="Rotary Prophets"
        shortDescription="This was my first and only attempt at being a singer/songwriter, more of a cathartic endeavor than anything else."
        longDescription=""
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