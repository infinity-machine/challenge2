import React from 'react'

const Media = () => {
  return (
    <div className="container twocolumns">
      <div>
        <iframe title="likeme" width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1214145112&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <iframe title="k" width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252034548&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <iframe title="counted sheep" width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/496932351&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
      <div>
        <h3>My Music</h3>
        <p>I make a variety of music, mostly using Ableton and its many built in synthesizers.
          but also by analog means, such as guitar, piano, and my voice. Here I've provided some samples
          of my work.
        </p>
      </div>
      <div>
        <h3>Videography Samples</h3>
        <p>I've filmed skateboarding for years, becoming skilled with Adobe Premiere Pro along the way.
          I've provided a short, standalone edit as a sample.
        </p>
      </div>
      <div>
        <iframe id="video" width="100%" src="https://www.youtube.com/embed/G71UUsODZdw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>

  )
}

export default Media