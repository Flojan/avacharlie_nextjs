import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-ava">
      <div
        className="
        bg-hero
        h-80
        md:h-md
        lg:h-lg
        2xl:h-2xl
        bg-bottom
        2xl:bg-center
        bg-cover
        w-full
        flex
        justify-center
      "
      >
        <div
          className="
          mt-4
          leading-8
          text-center
          w-full
          max-w-screen-2xl
          md:flex md:justify-end md:items-center
        "
        >
          <div className="md:mr-28 2xl:mr-0">
            <h1 className="text-5xl md:text-7xl xl:text-10xl 2xl:text-14xl">
              AVA <br className="hidden md:block" />
              CHARLIE
            </h1>
            <h2
              className="
              tracking-sm
              xl:tracking-xl
              2xl:tracking-2xl
              xl:text-3xl
              2xl:text-4xl
            "
            >
              VOCALIST
            </h2>
          </div>
        </div>
      </div>
      <div
        className="
        flex
        justify-center
        ml-7
        md:ml-14
        xl:ml-56
        mr-7
        md:mr-14
        xl:mr-56
        2xl:mr-56 2xl:ml-56
      "
      >
        <div className="flex flex-col w-full max-w-screen-2xl">
          <div
            id="video"
            className="
            overflow-hidden
            pt-yt
            relative
            w-full
            h-44
            mt-10
            md:mt-16
            xl:mt-28
            2xl:mt-32
            mb-8
            md:mb-10
            xl:mb-20
            2xl:mb-28
          "
          >
            <iframe
              className="border-0 h-full left-0 absolute top-0 w-full"
              src="https://www.youtube-nocookie.com/embed/7vj4bSE9eOg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mb-10 md:mb-20 xl:mb-40 2xl:mb-52">
            <h3
              className="
              text-2xl
              md:text-5xl
              xl:text-6xl
              mb-4
              md:mb-8
              xl:mb-10
              2xl:mb-14
              leading-8
              md:leading-13
              xl:leading-17
              2xl:leading-18
            "
            >
              NEW ALBUM <br className="hidden xl:block" />
              COMING <br className="xl:hidden" />
              UP <br className="hidden xl:block" />
              SOON!
            </h3>
            {/* <p className="text-base md:text-2xl xl:text-3xl leading-5 md:leading-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p> */}
          </div>
          <div
            className="
            grid grid-flow-col
            md:grid-flow-row
            grid-rows-3
            md:grid-rows-2
            2xl:grid-rows-2
            grid-cols-2
            md:grid-cols-3
            2xl:grid-cols-4
            gap-y-5
            xl:gap-y-10 xl:text-2xl
            2xl:mb-28
          "
          >
            <a
              className="hidden 2xl:block"
              href="https://designzigartig.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              2022 designzigartig
            </a>
            <div className="flex flex-row items-center">
              <a
                className="mr-1"
                href="https://www.instagram.com/ava.charlie.music/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
              <div className="xl:hidden">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={15}
                  height={15}
                />
              </div>
              <div className="hidden xl:block">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <a
                className="mr-1"
                href="https://www.facebook.com/ava.charlie.music/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FACEBOOK
              </a>
              <div className="xl:hidden">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={15}
                  height={15}
                />
              </div>
              <div className="hidden xl:block">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={20}
                  height={20}
                />
              </div>{" "}
            </div>
            <div className="flex flex-row items-center">
              <a
                className="mr-1"
                href="mailto:avacharliemusic@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SAY HELLO
              </a>
              <div className="xl:hidden">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={15}
                  height={15}
                />
              </div>
              <div className="hidden xl:block">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={20}
                  height={20}
                />
              </div>{" "}
            </div>
            <div className="flex flex-row items-center">
              <Link href="/datenschutz">
                <a className="mr-1">DATENSCHUTZ</a>
              </Link>
              <div className="xl:hidden">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={15}
                  height={15}
                />
              </div>
              <div className="hidden xl:block">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={20}
                  height={20}
                />
              </div>{" "}
            </div>
            <div className="flex flex-row items-center">
              <Link href="/impressum">
                <a className="mr-1">IMPRESSUM</a>
              </Link>
              <div className="xl:hidden">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={15}
                  height={15}
                />
              </div>
              <div className="hidden xl:block">
                <Image
                  alt="Pfeil"
                  src="/img/arrow.svg"
                  width={20}
                  height={20}
                />
              </div>{" "}
            </div>
          </div>
          <div
            id="footer"
            className="
            mt-10
            md:mt-16
            xl:mt-28
            mb-10
            md:mb-16
            xl:mb-20 xl:text-2xl
            2xl:hidden
          "
          >
            <a
              href="https://designzigartig.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              2022 designzigartig
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
