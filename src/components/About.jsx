import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full pt-20 h-screen bg-gradient-to-b text-white from-gray-800 to-black"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-10 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          harum deserunt doloremque nulla, quae sint unde molestiae est atque
          sapiente perferendis aliquam animi repellat dolorum tenetur, nesciunt
          eligendi nostrum? Laborum perferendis fugiat quos itaque unde non nisi
          beatae assumenda quibusdam? Doloremque perferendis vero sunt eveniet
          quas! Labore magnam pariatur beatae?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolore
          quibusdam molestias beatae eligendi quae nesciunt sunt voluptates,
          itaque rem obcaecati odit laboriosam asperiores magni perferendis
          magnam eum pariatur vitae voluptatem tempora ipsa provident aliquam
          nisi. Eligendi nemo iusto, itaque ullam sit amet neque, accusantium
          repellendus autem nobis similique voluptate.
        </p>
      </div>
    </div>
  );
}

export default About;
