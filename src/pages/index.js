import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import trecTeamImage from "../images/trec-team.jpg";
import trecLogo from "../images/logo-trec.png";
import clinicPhoto from "../images/clinic-photo-01.jpg";
import smileBG from "../images/smile-bg.png";
import checkmarkSVG from "../images/checkmark.svg";
import slider1Image from "../images/slider-photo-1.jpg";
import slider2Image from "../images/slider-photo-2.jpg";
import slider3Image from "../images/slider-photo-3.jpg";
import slider4Image from "../images/slider-photo-4.jpg";
import slider5Image from "../images/slider-photo-5.jpg";

const HeaderSection = styled.div`
  background-image: url(${smileBG});
  background-position: 55% 33%;
  @media screen and (min-width: 768px) {
    & {
      background-position: 55% 40%;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;

  @media screen and (min-width: 768px) {
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: calc(100%);
      top: 40px;
      left: 40px;
      z-index: -1;
      background-color: #f69634;
    }
  }
`;

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`nolan hill`, `dentist`, `dental`, `calgary`]}
      />
      <HeaderSection className="bg-nolan-blue flex flex-col items-center justify-center md:text-center h-screen px-4 md:px-20">
        <h1 className="font-serif text-white text-5xl md:text-6xl font-bold leading-tight">
          Everyone smiles in the same language
        </h1>
        <a
          href="#office"
          className="bg-regal-blue text-lg text-white rounded-full py-4 px-8 mt-8 self-start md:self-center"
        >
          Request an appointment
        </a>
      </HeaderSection>
      {/* Section - Welcome */}
      <div className="md:flex py-20 max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight md:w-2/6">
          Welcome to the Nolan Hill Clinic
        </h2>
        <p className="text-lg text-gray-700 mt-3 md:mt-0 md:w-4/6 md:pl-20">
          Excited to be in the vibrant community of Nolan Hill, we invite you to
          experience our new dental office. Our goal is to build relationships
          with families in our neighbourhood while providing gentle and caring
          dental treatment. We want to make your dental visits with us
          comfortable, whatever your needs may be.
        </p>
      </div>
      {/* Section - Gallery */}
      <div className="bg-black w-screen">
        <Carousel showThumbs={false} emulateTouch={true} infiniteLoop={true}>
          <div className="h-full">
            <img
              className="object-cover h-full"
              src={slider1Image}
              alt="nolan hill team"
            />
          </div>
          <div className="h-64">
            <img
              className="object-bottom"
              src={slider2Image}
              alt="nolan hill reception"
            />
          </div>
          <div className="h-64">
            <img src={slider3Image} alt="nolan hill waiting area" />
          </div>
          <div className="h-64">
            <img src={slider4Image} alt="nolan hill dental office 1" />
          </div>
          <div className="h-64">
            <img
              className="object-cover h-full"
              src={slider5Image}
              alt="nolan hill dental office 2"
            />
          </div>
        </Carousel>
      </div>
      <div className="relative flex flex-col items-center py-20 max-w-4xl mx-auto px-4">
        <h2 className="font-serif md:text-center text-3xl md:text-4xl font-bold leading-tight">
          We are a full service dental clinic where your health is our highest
          priority
        </h2>
        <div className="w-full mt-12 flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row w-full">
            <p className="flex font-serif text-regal-blue text-lg md:w-1/3">
              <span className="mr-4 md:mr-6">
                <img className="w-6" src={checkmarkSVG} alt="checkmark icon" />
              </span>
              Examinations
            </p>
            <p className="flex font-serif text-regal-blue text-lg md:w-1/3 mt-2 md:mt-0">
              <span className="mr-4 md:mr-6">
                <img className="w-6" src={checkmarkSVG} alt="checkmark icon" />
              </span>
              Children's Dentistry
            </p>
            <p className="flex font-serif text-regal-blue text-lg md:w-1/3 mt-2 md:mt-0">
              <span className="mr-4 md:mr-6">
                <img className="w-6" src={checkmarkSVG} alt="checkmark icon" />
              </span>
              Cleaning
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:mt-8">
            <p className="flex font-serif text-regal-blue text-lg md:w-1/3 mt-2 md:mt-0">
              <span className="mr-4 md:mr-6">
                <img className="w-6" src={checkmarkSVG} alt="checkmark icon" />
              </span>
              Braces
            </p>
            <p className="flex font-serif text-regal-blue text-lg md:w-1/3 mt-2 md:mt-0">
              <span className="mr-4 md:mr-6">
                <img className="w-6" src={checkmarkSVG} alt="checkmark icon" />
              </span>
              Invisalign
            </p>
            <p className="flex font-serif text-regal-blue text-lg md:w-1/3 mt-2 md:mt-0">
              <span className="mr-4 md:mr-6">
                <img className="w-6" src={checkmarkSVG} alt="checkmark icon" />
              </span>
              Teeth Whitening
            </p>
          </div>
        </div>
        <a
          href="/#office"
          className="self-start md:self-center bg-regal-blue text-lg text-white rounded-full mt-16 py-4 px-8"
        >
          Request an appointment today
        </a>
        <div className="bg-black w-64 h-px absolute bottom-0" />
      </div>
      <div className="flex flex-col items-center pt-20 pb-20 md:pb-56 max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight self-start md:self-center">
          Stop guessing what your fees are
        </h2>
        <p class="text-lg text-gray-700 mt-3">
          In 2017, the{" "}
          <a
            className="text-regal-blue text-lg font-semibold hover:underline"
            href="http://www.dentalhealthalberta.ca/index/Pages/alberta-dental-fee-guide-5423"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alberta Dental Association
          </a>{" "}
          and College unveiled the new dental fee guide for our province—the
          first of its kind in twenty years. Most importantly, the new dental
          fee guide, allows all our patients to feel comfortable knowing that
          they’re paying exactly what they’re supposed to pay. Therefore, we are
          proud to say that Nolan Hill Dental is ADA Fee Guide Compliant.
        </p>
        <a
          className="text-regal-blue hover:text-white hover:bg-regal-blue text-lg border-2 border-regal-blue rounded-full py-4 px-8 mt-8 self-start md:self-center"
          href="http://www.dentalhealthalberta.ca/index/Pages/alberta-dental-fee-guide-5423"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
      <div className="bg-wall-gray">
        <div className="relative flex flex-col items-center pb-20 md:py-20 max-w-4xl mx-auto md:pt-64">
          <div class="md:absolute bg-gray-400 w-full top-0 left-0 mb-10 md:-mt-32">
            <ImageWrapper className="">
              <img
                className="object-cover object-top"
                src={trecTeamImage}
                alt="TREC Dental team"
              />
            </ImageWrapper>
          </div>
          <div className="flex flex-col md:flex-row px-4">
            <div className="md:w-2/6 md:order-last mb-8">
              <img
                className="md:mx-auto md:mt-20"
                src={trecLogo}
                alt="TREC logo"
              />
            </div>
            <div className="md:w-4/6 md:pr-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
                Proud to be a part of the TREC Dental family
              </h2>
              <p class="text-lg text-gray-700 mt-3">
                Nolan Hill Dental is a part of TREC Dental family and group of
                dental clinics. TREC’s core values are right in the name,{" "}
                <span className="font-black text-trec-blue">Teamwork</span>,{" "}
                <span className="font-black text-trec-red">Respect</span>,{" "}
                <span className="font-black text-trec-orange">
                  Exceptional Dentistry
                </span>{" "}
                and{" "}
                <span className="font-black text-trec-green">
                  Continuous Improvement
                </span>
                . That means TREC Dental clinics provide amazing dentistry while
                spending our time doing good.
              </p>
              <a
                className="text-regal-blue hover:text-white hover:bg-regal-blue text-lg border-2 border-regal-blue rounded-full inline-block py-4 px-8  mt-8"
                href="https://trecdental.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-wall-gray w-screen">
        <img
          className="object-cover w-full h-full"
          src={clinicPhoto}
          alt="Nolan Hill waiting area"
        />
      </div>
      <div id="office" className="bg-wall-black text-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10">
            Office Information
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h3 className="font-serif text-2xl md:text-3xl mb-2">Contact</h3>
              <p>
                <a className="underline" href="tel:4034555717">
                  (403) 455-5717
                </a>
              </p>
              <p>
                <a
                  className="underline mt-2 inline-block"
                  href="mailto:nol sliderill@trecdental.com"
                >
                  nolanhill@trecdental.com
                </a>
              </p>
              <h3 className="font-serif text-2xl md:text-3xl mt-8 mb-2">
                Address
              </h3>
              <p>
                202 – 8 Nolan Hill Blvd NW <br />
                Calgary, Alberta,
                <br />
                T3R 0X2
                <br />
                <a
                  className="underline"
                  href="https://goo.gl/maps/BYNfYUdCjrpcypmj9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (View on Google Map)
                </a>
              </p>
              <h3 className="font-serif text-2xl md:text-3xl mt-8 mb-2">
                Office hours
              </h3>
              <p>
                <ul>
                  <li>Mon 10:00 am – 6:00 pm</li>
                  <li>Tue 10:00 am – 6:00 pm</li>
                  <li>Wed 7:00 am – 3:00 pm</li>
                  <li>Thu 7:00 am – 3:00 pm</li>
                  <li>Fri 7:00 am – 3:00 pm</li>
                  <li>Sat 8:00 am – 2:00 pm (twice/month)</li>
                </ul>
              </p>
            </div>
            <div className="mt-3 md:mt-0 md:w-1/2 mt-8">
              <h3 className="font-serif text-2xl md:text-3xl mb-2">
                Message us
              </h3>
              <p className="text-lg">
                <form className="mx-auto w-full">
                  <label
                    className="block font-bold mb-2 text-xs uppercase"
                    htmlFor="first-name"
                  >
                    Email*
                  </label>

                  <input
                    className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded text-gray-700 w-full"
                    id="email-address"
                    type="email"
                    placeholder="Enter your email address"
                  />

                  <label
                    className="block font-bold mb-2 text-xs uppercase"
                    htmlFor="full-name"
                  >
                    Name*
                  </label>

                  <input
                    className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded text-gray-700 w-full"
                    id="last-name"
                    type="text"
                    placeholder="Enter your name"
                  />

                  <label
                    className="block font-bold mb-2 text-xs uppercase"
                    htmlFor="message"
                  >
                    Message*
                  </label>

                  <textarea
                    className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded text-gray-700 w-full"
                    placeholder="Write your message here..."
                    rows="8"
                  />

                  <button className="bg-regal-blue text-lg text-white rounded-full py-4 px-8">
                    Send message
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
