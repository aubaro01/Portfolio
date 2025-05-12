import React, { useRef, useState } from 'react';
import { Card, Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';

const MusicPlayer = ({
  src,
  title = "Unknown Track",
  artist = "Unknown Artist",
  cover = "https://via.placeholder.com/150"
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const percent = (audio.currentTime / audio.duration) * 100;
    setProgress(percent);
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Card className="shadow-sm p-3 rounded-4 border-0" style={{ maxWidth: '360px', margin: 'auto' }}>
      <Row className="align-items-center g-2">
        <Col xs={3}>
          <Image src={cover} rounded className="w-100" style={{ borderRadius: '0.5rem' }} />
        </Col>
        <Col xs={6}>
          <h6 className="mb-1 text-truncate">{title}</h6>
          <small className="text-muted text-truncate">{artist}</small>
        </Col>
        <Col xs={3} className="text-end">
          <Button
            variant="dark"
            onClick={togglePlay}
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: '40px',
              height: '40px',
              fontSize: '16px',
              padding: 0
            }}
          >
            {isPlaying ? "❚❚" : "▶"}
          </Button>
        </Col>
      </Row>

      <Row className="align-items-center mt-2">
        <Col xs={2} className="text-start">
          <small className="text-muted">{formatTime(currentTime)}</small>
        </Col>
        <Col xs={8}>
          <ProgressBar
            now={progress}
            style={{ height: '4px', borderRadius: '3px' }}
          />
        </Col>
        <Col xs={2} className="text-end">
          <small className="text-muted">{formatTime(duration)}</small>
        </Col>
      </Row>

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
    </Card>
  );
};

export default MusicPlayer;
