"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import doctor_desktop from "@/../public/images/doctor-ru.png";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const [show, setShow] = useState(true);
  const [style] = useState("success");
  const [message] = useState<string | null>(null);
  const [selected, setSelected] = useState(0);
  const [currentanswer, setCurrentanswer] = useState(0);
  const [doanswer, setDoanswer] = useState(false);
  const [currentstop, setCurrentstop] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);

  const videoStops = [221]; // 3:41

  /*
  // Placeholder image URLs (you can replace these with actual images later)
  const images = {
    logo: "https://via.placeholder.com/200x80/1d3f78/ffffff?text=SORBIFER",
    doctorMobile: "https://via.placeholder.com/400x600/1d3f78/ffffff?text=Doctor+Mobile",
    doctor: "https://via.placeholder.com/600x800/1d3f78/ffffff?text=Doctor",
    checkMark: "https://via.placeholder.com/22x22/22c55e/ffffff?text=✓",
    video1: "https://via.placeholder.com/300x200/1d3f78/ffffff?text=Video+1",
    video3: "https://via.placeholder.com/300x200/1d3f78/ffffff?text=Video+3",
    gray: "https://via.placeholder.com/300x200/6b7280/ffffff?text=Locked",
    lock: "https://via.placeholder.com/50x50/6b7280/ffffff?text=🔒",
    bg: "https://via.placeholder.com/868x400/1d3f78/ffffff?text=Background",
    egis: "https://via.placeholder.com/200x100/1d3f78/ffffff?text=EGIS"
  };
  */

  const initvideo = (videoId: string) => {
    if (window.YT) {
      const player = new window.YT.Player("player", {
        videoId: videoId,
        height: "100%",
        width: "100%",
        playerVars: {
          fs: 0,
          rel: 0,
          origin: "http://localhost:3001",
        },
        events: {
          onReady: () => {},
          onStateChange: (event: { data: number }) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              const timerInterval = setInterval(() => {
                const current = Math.round(player.getCurrentTime());
                const stop = videoStops.indexOf(current);
                if (stop > -1) {
                  player.pauseVideo();
                  setCurrentstop(true);
                  // Livewire.emit('starttest', {'videoId': 5, 'stop': 6});
                }
              }, 1000);
              setTimer(timerInterval);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              if (timer) {
                clearInterval(timer);
                setTimer(null);
              }
            }
          },
        },
      });
    }
  };
  useEffect(() => {
    // Initialize YouTube API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      initvideo("AXHchGrCvVI"); // Use the correct video ID
    };
  }, [initvideo]);


  const stopvideos = () => {
    if (videosRef.current) {
      const videos = videosRef.current.getElementsByTagName("video");
      for (let i = 0; i < videos.length; i++) {
        videos[i].pause();
      }
    }
  };

  const handleAnswer = (answer: number) => {
    setCurrentanswer(answer);
    stopvideos();
    setDoanswer(true);

    // Play corresponding video
    if (answer === 1 && video1Ref.current) {
      video1Ref.current.load();
      video1Ref.current.play();
    } else if (answer === 2 && video2Ref.current) {
      video2Ref.current.load();
      video2Ref.current.play();
    } else if (answer === 3 && video3Ref.current) {
      video3Ref.current.load();
      video3Ref.current.play();
    }
  };

  const nextQuestion = () => {
    stopvideos();
    setCurrentanswer(0);
    setCurrentstop(false);
  };

  return (
    <div
      className="relative min-h-screen min-w-full z-0"
      style={{ maxWidth: "100vw" }}
    >
      {/* Banner Message */}
      {show && message && (
        <div
          className={`${style === "success" ? "bg-indigo-500" : "bg-red-700"}`}
        >
          <div className="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center min-w-0">
                <span
                  className={`flex p-2 rounded-lg ${
                    style === "success" ? "bg-indigo-600" : "bg-red-600"
                  }`}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <p className="ml-3 font-medium text-sm text-white truncate">
                  {message}
                </p>
              </div>
              <div className="flex-shrink-0 sm:ml-3">
                <button
                  type="button"
                  className={`-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150 ${
                    style === "success"
                      ? "hover:bg-indigo-600 focus:bg-indigo-600"
                      : "hover:bg-red-600 focus:bg-red-600"
                  }`}
                  aria-label="Dismiss"
                  onClick={() => setShow(false)}
                >
                  <svg
                    className="h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar handled by layout */}

      {/* Main Content */}
      <main className="bg-white">
        {/* Main Screen */}
        <div className="max-w-screen-xl w-full mx-auto pt-24 px-4">
          <div className="relative md:pl-32 sm:pb-[65%] md:pb-0 md:min-h-[320px] lg:min-h-[430px]">
            <div className="relative pt-[5%] text-4xl lg:text-5xl">
              <div className="max-w-20 sm:w-auto text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold">
                <span dangerouslySetInnerHTML={{ __html: t("subtitle") }} />
              </div>
              <h1 className="font-bold text-sorbifer-dark">
                <span dangerouslySetInnerHTML={{ __html: t("title") }} />
              </h1>
              <div className="mt-[5%] md:mt-24 text-lg sm:text-2xl md:text-base lg:text-2xl">
                <span dangerouslySetInnerHTML={{ __html: t("description") }} />
              </div>
            </div>
            <div className="sm:absolute relative w-full md:w-1/2 right-0 top-0 h-full flex items-end justify-end">
              <Image
                src={doctor_desktop}
                alt="Doctor"
                className="block w-full"
                priority
              />
            </div>

          </div>

          <div className="mt-24">
            <h1 className="text-2xl font-bold text-center xs:px-[10%]">
              <span dangerouslySetInnerHTML={{ __html: t("caseTitle") }} />
            </h1>
            <div className="pt-6 text-lg xs:w-[80%] text-center mx-auto max-w-[700px]">
                <span dangerouslySetInnerHTML={{ __html: t("caseDescription") }} />
            </div>
            <div className="relative sm:pl-32 mt-12 lg:mt-24 sm:pr-32 lg:pr-0 xs:w-[80%] sm:w-full mx-auto">
              <div className="lg:flex text-lg text-sorbifer-dark lg:-ml-14 lg:mr-14">
                <div className="lg:w-1/3 flex mr-[8%]">
                  <div className="mr-8 mt-2">
                    <Image
                      src="/images/checkmark.png"
                      alt="Check"
                      width={22}
                      height={22}
                      className="min-w-[22px] mr-0"
                    />
                  </div>
                  <div>{t("step1")}</div>
                </div>
                <div className="lg:w-1/3 flex mr-[8%] mt-4 sm:mt-8 lg:mt-0">
                  <div className="mr-8 mt-2">
                    <Image
                      src="/images/checkmark.png"
                      alt="Check"
                      width={22}
                      height={22}
                      className="min-w-[22px] mr-0"
                    />
                  </div>
                  <div>{t("step2")}</div>
                </div>
                <div className="lg:w-1/3 flex mt-4 sm:mt-8 lg:mt-0">
                  <div className="mr-8 mt-2">
                    <Image
                      src="/images/checkmark.png"
                      alt="Check"
                      width={22}
                      height={22}
                      className="min-w-[22px] mr-0"
                    />
                  </div>
                  <div>{t("step3")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div
          id="video"
          className="max-w-screen-xl w-full mx-auto pt-12 sm:px-4 lg:px-32"
        >
          <div className="w-full pb-[56.34765625%] relative">
            <div
              id="player"
              className="absolute top-0 left-0 right-0 bottom-0"
              style={{ width: "100%", height: "100%" }}
            ></div>

            {/* Test Overlay */}
            <div
              className={`${
                currentstop !== false ? "block" : "hidden"
              } fixed overflow-y-scroll lg:absolute p-4 lg:p-0 top-0 left-0 h-full w-full bg-white z-10`}
            >
              <div className="h-full w-full landscape:flex">
                <div className="mt-4 lg:mt-0 w-full landscape:w-2/3 lg:w-2/3 px-8 py-4 xl:px-12 xl:py-8">
                  <h1 className="lg:text-lg xl:text-2xl font-bold">
                    {t("questionTitle")}
                  </h1>
                  <div className="lg:mt-4 xl:mt-12 mb-4">
                    {t("selectAnswer")}
                  </div>
                  <ul className="lg:pr-24 pb-4">
                    <li
                      className={`${
                        currentanswer === 1
                          ? "bg-sorbifer-red"
                          : "bg-sorbifer-light"
                      } text-white`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAnswer(1);
                        }}
                        className="block w-full h-full p-3 xl:p-4 mb-2 font-bold lg:text-lg xl:text-xl"
                      >
                        {t("answer1")}
                      </a>
                    </li>
                    <li
                      className={`${
                        currentanswer === 2
                          ? "bg-sorbifer-green"
                          : "bg-sorbifer-light"
                      } text-white`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAnswer(2);
                        }}
                        className="block w-full h-full p-3 xl:p-4 mb-2 font-bold lg:text-lg xl:text-xl"
                      >
                        {t("answer2")}
                      </a>
                    </li>
                    <li
                      className={`${
                        currentanswer === 3
                          ? "bg-sorbifer-red"
                          : "bg-sorbifer-light"
                      } text-white`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAnswer(3);
                        }}
                        className="block w-full h-full p-3 xl:p-4 mb-2 font-bold lg:text-lg xl:text-xl"
                      >
                        {t("answer3")}
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className="w-full mt-4 lg:mt-0 landscape:w-1/3 lg:w-1/3 lg:block landscape:pr-8 pt-4 xl:pr-12 xl:pt-8 pb-8"
                  ref={videosRef}
                >
                  <div className="mx-auto w-full portrait:w-1/2 lg:w-full">
                    <div className="relative pt-1/1 h-0">
                      <video
                        playsInline
                        ref={video1Ref}
                        className={`${
                          currentanswer === 1 ? "block" : "hidden"
                        } w-full absolute top-0 left-0`}
                      >
                        <source src="/video/rus/2.1.1.mp4" type="video/mp4" />
                      </video>
                      <video
                        playsInline
                        ref={video2Ref}
                        className={`${
                          currentanswer === 2 ? "block" : "hidden"
                        } w-full absolute top-0 left-0`}
                      >
                        <source src="/video/rus/2.1.2.mp4" type="video/mp4" />
                      </video>
                      <video
                        playsInline
                        ref={video3Ref}
                        className={`${
                          currentanswer === 3 ? "block" : "hidden"
                        } w-full absolute top-0 left-0`}
                      >
                        <source src="/video/rus/2.1.3.mp4" type="video/mp4" />
                      </video>
                      <div
                        className={`absolute top-0 left-0 w-full h-full bg-white/100 transition delay-300 ${
                          doanswer ? "bg-white/0" : "bg-white/100"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div
                    className={`portrait:text-center mt-8 landscape:mt-4 lg:mt-12 landscape:text-xs lg:text-base ${
                      currentanswer > 0 ? "block" : "hidden"
                    }`}
                  >
                    <div
                      className={`text-sorbifer-green ${
                        currentanswer === 2 ? "block" : "hidden"
                      }`}
                    >
                      {t("correctAnswer")}
                    </div>
                    <div
                      className={`text-sorbifer-red ${
                        currentanswer !== 2 ? "block" : "hidden"
                      }`}
                    >
                      {t("incorrectAnswer")}
                    </div>
                  </div>

                  <div
                    className={`text-center w-full min-h-20 ${
                      currentanswer === 2 ? "block" : "hidden"
                    }`}
                  >
                    <button
                      onClick={nextQuestion}
                      className="inline-block bg-sorbifer-dark rounded-xl landscape:text-xs lg:text-base py-4 px-4 lg:px-8 mt-4 lg:mt-12 font-bold text-white"
                    >
                      {t("continueButton")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sorbifer-light text-center py-8 px-12">
            {t("solveCase")}
          </div>

          <div className="mt-4 md:flex gap-x-4 text-center">
            <Link href="/1" className="relative inline-block w-full">
              <Image
                src="/images/video-1.jpg"
                alt="Video 1"
                width={0}
                height={0}
                sizes="100vw"
                className="min-w-[100%] max-w-full w-[100%] h-auto"
                priority
              />
            </Link>
            <Link href="/3" className="relative inline-block w-full">
              <Image
                src="/images/video-3.jpg"
                alt="Video 3"
                width={0}
                height={0}
                sizes="100vw"
                className="min-w-[100%] max-w-full w-[100%] h-auto"
                priority
              />
            </Link>
            <Link href="/4" className="relative inline-block pointer-events-none">
              <div
                className="w-[300px] h-full bg-gray-200 rounded aspect-[3/2]"
                aria-label="Locked video placeholder"
              ></div>
              <div className="absolute bg-sorbifer-light/30 w-full h-full top-0 left-0 flex justify-center items-center">
                <Image
                  src="/images/lock.png"
                  alt="Lock"
                  width={22}
                  height={22}
                />
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className="max-w-screen-xl w-full mx-auto px-4 lg:px-32 pt-12 lg:pt-24"
          id="faq"
        >
          <h1 className="text-2xl font-bold">
            <span dangerouslySetInnerHTML={{ __html: t("faqTitle") }} />
          </h1>
          <ul className="w-full mx-auto border-sorbifer-light border-b pt-8 marker:text-sorbifer-light">
            <li className="border-sorbifer-light border-t">
              <a
                href=""
                className="flex w-full justify-between py-8 items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setSelected(selected === 1 ? 0 : 1);
                }}
              >
                <h1 className="text-xl">{t("faq1")}</h1>
                <div className="flex justify-center items-center mr-4 p-3 min-w-[38.97px] w-12 h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 rotate-0 text-sorbifer-light ${
                      selected === 1 ? "rotate-90" : "rotate-0"
                    }`}
                    width="100%"
                    height="100%"
                    viewBox="0 0 512 512"
                    fill="#caa8cd"
                  >
                    <path d="M478,256,302,432l-21.21-21.2L420.6,271H34V241H420.6L280.75,101.16,302,80Z"></path>
                  </svg>
                </div>
              </a>
              <div
                className="max-h-0 overflow-hidden transition-all duration-300"
                id="q1"
                style={selected === 1 ? { maxHeight: "1000px" } : {}}
              >
                <div className="text-base w-[80%] pb-12">{t("faq1Answer")}</div>
              </div>
            </li>

            <li className="border-sorbifer-light border-t">
              <a
                href=""
                className="flex w-full justify-between py-8 items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setSelected(selected === 2 ? 0 : 2);
                }}
              >
                <h1 className="text-xl">{t("faq2")}</h1>
                <div className="flex justify-center items-center mr-4 p-3 min-w-[38.97px] w-12 h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 rotate-0 text-sorbifer-light ${
                      selected === 2 ? "rotate-90" : "rotate-0"
                    }`}
                    width="100%"
                    height="100%"
                    viewBox="0 0 512 512"
                    fill="#caa8cd"
                  >
                    <path d="M478,256,302,432l-21.21-21.2L420.6,271H34V241H420.6L280.75,101.16,302,80Z"></path>
                  </svg>
                </div>
              </a>
              <div
                className="max-h-0 overflow-hidden transition-all duration-300"
                id="q2"
                style={selected === 2 ? { maxHeight: "1000px" } : {}}
              >
                <div className="text-base w-[80%] pb-12">
                  {t("faq2Answer")}
                  <ul className="list-disc marker:text-sorbifer-dark">
                    <li className="ml-8">{t("competency1")}</li>
                    <li className="ml-8">{t("competency2")}</li>
                    <li className="ml-8">{t("competency3")}</li>
                    <li className="ml-8">{t("competency4")}</li>
                    <li className="ml-8">{t("competency5")}</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="border-sorbifer-light border-t">
              <a
                href=""
                className="flex w-full justify-between py-8 items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setSelected(selected === 3 ? 0 : 3);
                }}
              >
                <h1 className="text-xl">{t("faq3")}</h1>
                <div className="flex justify-center items-center mr-4 p-3 min-w-[38.97px] w-12 h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 rotate-0 text-sorbifer-light ${
                      selected === 3 ? "rotate-90" : "rotate-0"
                    }`}
                    width="100%"
                    height="100%"
                    viewBox="0 0 512 512"
                    fill="#caa8cd"
                  >
                    <path d="M478,256,302,432l-21.21-21.2L420.6,271H34V241H420.6L280.75,101.16,302,80Z"></path>
                  </svg>
                </div>
              </a>
              <div
                className="max-h-0 overflow-hidden transition-all duration-300"
                id="q3"
                style={selected === 3 ? { maxHeight: "1000px" } : {}}
              >
                <div className="text-base w-[80%] pb-12">{t("faq3Answer")}</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="relative max-w-screen-xl w-full mx-auto mt-12">
          <div className="lg:absolute left-0 right-0 flex justify-center lg:justify-end">
            <div
              className="px-4 lg:px-32 pt-12 lg:pt-24 flex lg:justify-end"
              id="benefits"
            >
              <h1 className="text-2xl text-sorbifer-dark font-bold">
                <span dangerouslySetInnerHTML={{ __html: t("benefitsTitle") }} />
              </h1>
            </div>
          </div>
            <Image src="/images/girl.png" width={868} height={668}  className="w-full max-w-[868px]" alt="Background" />
          
          <div className="lg:absolute left-0 top-0 right-0 flex justify-center lg:justify-end">
            <div className="px-4 lg:px-32 pt-12 lg:pt-24 flex lg:justify-end">
              <ul className="lg:mt-32">
                <li className="mb-8 flex items-end">
                  <Image
                  src="/images/checkmark.png"
                  className="mr-8"
                  alt="Check"
                  width={22}
                  height={22}
                  />
                  <span dangerouslySetInnerHTML={{ __html: t("benefit1") }} />
                </li>
                <li className="mb-8 flex items-end">
                  <Image
                  src="/images/checkmark.png"
                  className="mr-8"
                  alt="Check"
                  width={22}
                  height={22}
                  />
                  <span dangerouslySetInnerHTML={{ __html: t("benefit2") }} />
                </li>
                <li className="mb-8 flex items-end">
                  <Image
                  src="/images/checkmark.png"
                  className="mr-8"
                  alt="Check"
                  width={22}
                  height={22}
                  />
                  <span dangerouslySetInnerHTML={{ __html: t("benefit3") }} />
                </li>
                <li className="mb-8 flex items-end">
                  <Image
                  src="/images/checkmark.png"
                  className="mr-8"
                  alt="Check"
                  width={22}
                  height={22}
                  />
                  <span dangerouslySetInnerHTML={{ __html: t("benefit4") }} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer handled by layout */}
      </main>
    </div>
  );
}
