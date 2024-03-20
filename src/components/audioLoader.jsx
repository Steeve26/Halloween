import React, { useEffect, useState } from "react";

function audioLoader(src) {
  const [audio, setAudio] = React.useState(null);

  useEffect(() => {
    const audioElement = new Audio(src);
    audioElement.load();
    setAudio(audioElement);
  }, [src]);

  return audio;
}

export default audioLoader;