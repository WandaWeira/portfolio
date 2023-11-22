import React from "react";

const OtherSkills = () => {
  return (
    <div className="my-10 w-full md:pl-16">
      <h1 className="font-semibold text-3xl">
        Additional technologies and skills
      </h1>
      <div className="flex justify-between mx-28 mt-10">
        <ul className="my-6 list-disc">
          <li>Git</li>
          <li>Quick learning</li>
          <li>Wordpress</li>
        </ul>
        <ul className="my-6 list-disc">
          <li>Hubspot</li>
          <li>Teamwork</li>
          <li>RWD</li>
        </ul>
        <ul className="my-6 list-disc">
          <li>Somethis</li>
          <li>Else</li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
