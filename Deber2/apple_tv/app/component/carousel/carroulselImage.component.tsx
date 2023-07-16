'use client'
import { Card } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageCard from "./card.component";

const CarouselComponent = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    return setCarouselItems(sourceMedia);
  }, []);

    // Media Sources
    const sourceMedia = [
        { 
            type: "image", 
            url: "https://pbs.twimg.com/media/FOc0wEzXEAkV4sh.jpg", 
            title: "Spiderman",
            duration:'3H00',
            extra: 'Nominada al Oscar'
        },
        {
            type: "image", 
            url: "https://www.apple.com/tv-pr/shows-and-films/t/the-afterparty/images/season-02/show-home-graphic-header/key-art-01/4x1/Apple_TV_The_Afterparty_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1687978795500", 
            title: " 'The After Party'",
            duration:'3H00',
            extra: 'Nominada al Oscar'
        },
        { 
            type: "image", 
            url: "https://www.apple.com/tv-pr/articles/2022/02/apple-tv-presents-exciting-lineup-of-new-series-from-the-worlds-greatest-storytellers-set-to-debut-globally-in-2022/images/big-image/big-image-01/020422_Apple_Presents_Lineup_New_Series_Big_Image_01_big_image_post.jpg.large.jpg", 
            title: "SUSPICION",
            duration:'3H00',
            extra: 'Nominada al Oscar'
        },
        {
            type: 'image',
            url:'https://www.apple.com/tv-pr/shows-and-films/f/foundation/images/season-02/show-home-graphic-header/key-art-02/4x1/Apple_TV_Foundation_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1688089474799',
            title: "Foundation",
            duration:'3H00',
            extra: 'Nominada al Oscar'
        },
        {
            type: 'image',
            url:'https://www.apple.com/tv-pr/shows-and-films/s/silo/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Silo_key_art_graphic_header_4_1_show_home.jpg.large_2x.jpg',
            title: "Silo",
            duration:'3H00',
            extra: 'Nominada al Oscar'
        },
        {
            type: 'image',
            url:'https://www.barbie-themovie.com/images/share.jpg',
            title: "barbie",
            duration:'3H00',
            extra: 'Nominada al Oscar'
        },
        {
            type: 'image',
            url:'https://www.apple.com/tv-pr/shows-and-films/c/carpool-karaoke-the-series/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Carpool_Karaoke_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1685649081752',
            title: "Carpool",
            duration:'3H00',
            extra: 'Nominada al Oscar'
        },
        {
            type: 'image',
            url:'https://www.apple.com/newsroom/images/product/apple-tv-plus/standard/Apple-Today-at-Apple-session-Ted-Lasso-hero_big.jpg.large.jpg',
            title: "Ted Lasso",
            duration:'3H00',
            extra: 'Nominada al Oscar'
        },
      ];

      return (
        <Carousel autoPlay showThumbs={false} showStatus={false}>
          {carouselItems
            .filter((item) => item.type === "image")
            .map((item, index) => (
              <div key={index}>
                <img
                  src={item.url}
                  alt={`Imagen ${index + 1}`}
                  style={{ height: "450px" }}
                  className="rounded-b-lg"
                />
                <Card className="legend">
                    <imageCard
                    title={item.title}
                    duracion={item.duration}
                    descripcion={item.descripcion}
                    />
                </Card>
              </div>
            ))}
        </Carousel>
      );
    };

export default CarouselComponent;
