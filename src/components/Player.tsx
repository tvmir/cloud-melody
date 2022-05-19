import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import { Artist, Song } from "@prisma/client";
import { useStoreActions } from "easy-peasy";
import { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";
import {
  BsSkipStart,
  BsSkipEnd,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { IoIosRepeat, IoIosShuffle, IoIosVolumeLow } from "react-icons/io";
import { formatTime } from "../lib/format";

interface Props {
  songs: Artist[];
  active: Song;
}

function Player({ songs, active }: Props) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTracking, setIsTracking] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeated, setIsRepeated] = useState(false);
  const [track, setTrack] = useState(0.0);
  const [duration, setDuration] = useState(0.0);
  const [currSong, setCurrSong] = useState(
    songs?.findIndex((song) => song.id === active.id)
  );
  const activeRef = useRef<ReactHowler>(null);
  const repeatRef = useRef(isRepeated);
  const setActive = useStoreActions((state: any) => state.changeCurrSong);

  const onPrevSong = () => {
    setCurrSong((song) => {
      return song ? song - 1 : songs?.length - 1;
    });
  };

  const onNextSong = () => {
    // @ts-ignore
    setCurrSong((curr) => {
      if (curr) {
        const next = Math.floor(Math.random() * songs?.length);
        if (next !== curr) {
          return next;
        } else {
          return onNextSong();
        }
      } else {
        return curr === songs?.length - 1 ? 0 : curr + 1;
      }
    });
  };

  const onPlay = (value: boolean) => {
    setIsPlaying(value);
  };

  const onLoad = () => {
    setDuration(activeRef.current?.duration() as number);
  };

  const onEnd = () => {
    if (repeatRef.current) {
      setTrack(0);
      activeRef.current?.seek(0);
    } else {
      onNextSong();
    }
  };

  const onShuffle = () => {
    setIsShuffled((shuffle) => !shuffle);
  };

  const onRepeat = () => {
    setIsRepeated((repeat) => !repeat);
  };

  const onDrag = (v: any) => {
    setTrack(parseFloat(v[0]));
    activeRef.current?.seek(v[0] as number);
  };

  // Adding animation on drag for current active song
  useEffect(() => {
    let timer!: number;

    if (isPlaying && !isTracking) {
      const frame = () => {
        setTrack(activeRef.current?.seek() as number);
        timer = requestAnimationFrame(frame);
      };

      timer = requestAnimationFrame(frame);
      return () => cancelAnimationFrame(timer);
    }
    cancelAnimationFrame(timer);
  }, [isPlaying, isTracking]);

  // Eliminating state changes when using React Howler on repeat
  useEffect(() => {
    repeatRef.current = isRepeated;
  }, [isRepeated]);

  // useEffect(() => {
  //   setActive(songs[currSong]);
  // }, [() => {}, [currSong, setActive, songs]]);

  return (
    <div>
      <div>
        {/* <ReactHowler
          playing={isPlaying}
          src={active?.audioUrl}
          ref={activeRef}
          onLoad={onLoad}
          onEnd={onEnd}
        /> */}
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="space-x-12 pl-64">
          <button className="text-[#a99dad] text-2xl">
            <BsSkipStart />
          </button>
          {!isPlaying ? (
            <button
              onClick={() => onPlay(true)}
              className="text-[#a99dad] text-4xl"
            >
              <BsPlayCircleFill />
            </button>
          ) : (
            <button
              onClick={() => onPlay(false)}
              className="text-[#a99dad] text-4xl"
            >
              <BsPauseCircleFill />
            </button>
          )}
          <button className="text-[#a99dad] text-2xl">
            <BsSkipEnd />
          </button>
          <button
            onClick={onShuffle}
            className="text-[#a99dad] text-2xl text-left"
          >
            <IoIosShuffle />
          </button>
          <button onClick={onRepeat} className="text-[#a99dad] text-2xl pl-24">
            <IoIosRepeat />
          </button>
        </div>
      </div>
      <div className="text-[#a99dad]">
        <div className="relative">
          <div className="text-violet-200">
            <div className="flex justify-center items-center">
              <div className="w-[90%] text-left mt-10">
                <p className="text-xs">{formatTime(track)}</p>
              </div>

              <div className="w-[91%] absolute">
                <RangeSlider
                  aria-label={["min", "max"]}
                  step={0.1}
                  min={0}
                  max={duration ? +duration.toFixed(2) : 0}
                  id="player-range"
                  onChange={onDrag}
                  // value={[track]}
                  onChangeStart={() => setIsTracking(true)}
                  onChangeEnd={() => setIsTracking(false)}
                >
                  <RangeSliderTrack bg="pink.800">
                    <RangeSliderFilledTrack bg="pink.900" />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                </RangeSlider>
              </div>
              <div className="text-right mt-10">
                <p className="text-xs">{formatTime(duration)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
