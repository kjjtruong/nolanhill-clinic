import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import christinaProfilePhoto from "../images/christina-profile-photo.jpg";
import danProfilePhoto from "../images/dan-profile-photo.jpg";
import tracyProfilePhoto from "../images/tracy-profile-photo.jpg";
import reillyProfilePhoto from "../images/reilly-profile-photo.jpg";
import catarinaProfilePhoto from "../images/catarina-profile-photo.jpg";
import kristinaProfilePhoto from "../images/kristina-profile-photo.jpg";
import ellenProfilePhoto from "../images/ellen-profile-photo.jpg";
import erinProfilePhoto from "../images/erin-profile-photo.jpg";
import teamMoustachePhoto from "../images/team-moustache-photo.jpg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="bg-trec-orange flex flex-col justify-center text-center h-64 px-4 py-40">
        <h1 className="font-serif text-white text-5xl md:text-6xl font-bold leading-tight self-start md:self-center inline-block">
          Meet our team
        </h1>
      </div>
      <div className="bg-wall-gray">
        <div className="md:flex py-20 max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight md:text-center">
            Our clinic is a place where comfort meets dentistry. Meet the Nolan
            Hill Dental family where we’re all smiles.
          </h2>
        </div>
      </div>
      <div className="relative flex flex-col items-center py-20 max-w-5xl mx-auto px-4">
        {/* Christina */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img className="w-full" src={christinaProfilePhoto} />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center md:pl-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-regal-blue">
              Dr. Christina Coakwell
            </h2>
            <p className="text-lg font-black uppercase tracking-wider my-2">
              Dentist
            </p>
            <p className="text-lg text-gray-700 ">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged."
            </p>
          </div>
        </div>
        {/* Dan */}
        <div className="flex flex-col md:flex-row-reverse mt-20">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img className="w-full" src={danProfilePhoto} />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center md:pr-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-regal-blue">
              Dr. Dan Park
            </h2>
            <p className="text-lg font-black uppercase tracking-wider my-2">
              Dentist
            </p>
            <p className="text-lg text-gray-700 ">
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged."
            </p>
          </div>
        </div>
        {/* Tracy */}
        <div className="flex flex-col md:flex-row mt-20">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img className="w-full" src={tracyProfilePhoto} />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center md:pl-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-regal-blue">
              Tracy
            </h2>
            <p className="text-lg font-black uppercase tracking-wider my-2">
              Office Manager
            </p>
            <p className="text-lg text-gray-700 ">
              "Being in the dental field for over 10 years working in both
              Australia and Canada has given me a love and appreciation for
              people and the quality dentistry we can provide. From modern
              dental technology to ensuring each patient feels genuinely cared
              for, at Nolan Hill Dental we want you finish your appointment with
              a smile. Our dental team is delighted to be in the new community
              of Nolan Hill and we look forward to providing you and your family
              optimal dental care all year long."
            </p>
          </div>
        </div>
        {/* Reilly */}
        <div className="flex flex-col md:flex-row-reverse mt-20">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img className="w-full" src={reillyProfilePhoto} />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center md:pr-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-regal-blue">
              Reilly
            </h2>
            <p className="text-lg font-black uppercase tracking-wider my-2">
              Administrator
            </p>
            <p className="text-lg text-gray-700 ">
              "I love working at Nolan Hill Dental because of the people!
              Whether it's the amazing team I get to work with or building
              relationships with our patients, it makes it a joy to come to work
              every day. I always strive to be a positive influence and to help
              you have a great experience with us, whether that's answering
              questions over the phone or being a smiling face at the front
              desk."
            </p>
          </div>
        </div>
        {/* Catarina */}
        <div className="flex flex-col md:flex-row mt-20">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img className="w-full" src={catarinaProfilePhoto} />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center md:pl-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-regal-blue">
              Catarina
            </h2>
            <p className="text-lg font-black uppercase tracking-wider my-2">
              Dental Hygienist
            </p>
            <p className="text-lg text-gray-700 ">
              "I love working at Nolan Hill Dental because it gives me the
              opportunity and the resources to be able to provide optimal care
              for my patients, as well as build positive dental experiences and
              long lasting relationships."
            </p>
          </div>
        </div>
        {/* Kristina */}
        <div className="flex flex-col md:flex-row-reverse mt-20">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img className="w-full" src={kristinaProfilePhoto} />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center md:pr-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-regal-blue">
              Kristina
            </h2>
            <p className="text-lg font-black uppercase tracking-wider my-2">
              Dental Hygienist
            </p>
            <p className="text-lg text-gray-700 ">
              "The dental field has always fascinated me since I was young, and
              I'm very lucky to have found Nolan Hill Dental! We have such a
              wonderful team working together to provide the best experience for
              our patients, and I'm excited to have the opportunity to get to
              know you personally and help you improve your oral health!"
            </p>
          </div>
        </div>
        {/* Ellen */}
        <div className="flex flex-col md:flex-row mt-20">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img className="w-full" src={ellenProfilePhoto} />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center md:pl-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-regal-blue">
              Ellen
            </h2>
            <p className="text-lg font-black uppercase tracking-wider my-2">
              Dental Assistant
            </p>
            <p className="text-lg text-gray-700 ">
              "I love being a dental assistant to help people smile and I like
              seeing a variety of patients with different needs. My co-workers
              are very skilled, smart and have a great relationship with each
              other and with patients...Nolan Hill is a great place to work!"
            </p>
          </div>
        </div>
        {/* Erin */}
        <div className="flex flex-col md:flex-row-reverse mt-20">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <img className="w-full" src={erinProfilePhoto} />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center md:pr-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-regal-blue">
              Erin
            </h2>
            <p className="text-lg font-black uppercase tracking-wider my-2">
              Dental Assistant
            </p>
            <p className="text-lg text-gray-700 ">
              "I love being a dental assistant for many reasons, but number one
              is because I love helping people and making a difference in
              peoples lives. Working at Nolan Hill Dental gives me the
              opportunity to be the outgoing, fun loving person I am while also
              providing the best care possible!"
            </p>
          </div>
        </div>
        <div className="bg-black w-64 h-px absolute bottom-0" />
      </div>
      <div className="relative flex flex-col items-center py-20 max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-center text-3xl md:text-4xl font-bold leading-tight">
          Get to know us on Facebook
        </h2>
        <a
          href="#"
          className="bg-regal-blue text-lg text-white rounded-full mt-16 py-4 px-8"
        >
          Follow us on Facebook
        </a>
      </div>
      <div className="bg-wall-gray w-screen">
        <img
          className="object-cover w-full h-full"
          src={teamMoustachePhoto}
          alt="Nolan Hill waiting area"
        />
      </div>
    </Layout>
  );
}

export default AboutPage;
