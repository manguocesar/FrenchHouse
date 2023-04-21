import { useRouter } from "next/router";
import projects from "../../const/projects.json";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useState } from "react";

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  const [hideImageTwo, setHideImageTwo] = useState(false);
  const [hideImageThree, setHideImageThree] = useState(false);
  const [hideImageFour, setHideImageFour] = useState(false);
  const [hideImageFive, setHideImageFive] = useState(false);

  const object = projects.find((item) => item.name === name);

  return (
    <Layout>
      <div className="flex flex-col items-center mb-5">
        <p className="text-5xl font-bold">{object?.title}</p>
        <p className="text-3xl font-medium">{object?.buildings}</p>
        <div className="flex items-center">
          <Image
            className="my-5 rounded-lg"
            src={`/project/${name}.png`}
            alt="mainPicture"
            width={700}
            height={100}
            priority
          />
          <div className="flex flex-col m-2">
            <div className="text-2xl font-semibold my-2 text-center">
              {object && <Types types={object.types} />}
            </div>
            <div className="text-lg font-semibold my-2 text-center">
              {object && <Types types={object.services} />}
            </div>
            <div className="flex items-center my-2 justify-center">
              <Image
                className="w-8 hover:scale-105"
                src={`/location.png`}
                alt="location"
                width={100}
                height={100}
                priority
              />
              <p className="text-xl font-semibold my-2">{object?.location}</p>
            </div>
            <div className="flex items-center my-2 justify-center">
              <Image
                className="w-10 hover:scale-105"
                src={`/surface.png`}
                alt="surface"
                width={100}
                height={100}
                priority
              />
              <p className="italic text-xl font-semibold">
                {object?.surface} m2
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-around">
          {!hideImageTwo && (
            <Image
              className="my-5 rounded-lg hover:scale-110"
              src={`/project/${name}2.png`}
              onError={() => {
                setHideImageTwo(true)
              }}
              alt="secondaryPic"
              width={300}
              height={100}
              priority
            />
          )}
          {!hideImageThree && (
          <Image
            className="my-5 rounded-lg hover:scale-110"
            src={`/project/${name}3.png`}
            onError={() => {
              setHideImageThree(true)
            }}
            alt="secondaryPic"
            width={300}
            height={100}
            priority
          />
          )}
          {!hideImageFour && (
          <Image
            className="my-5 rounded-lg hover:scale-110"
            src={`/project/${name}4.png`}
            onError={() => {
              setHideImageFour(true)
            }}
            alt="secondaryPic"
            width={300}
            height={100}
            priority
          />
          )}
          {!hideImageFive && (
          <Image
            className="my-5 rounded-lg hover:scale-110"
              src={`/project/${name}5.png`}
              onError={() => {
                setHideImageFive(true)
              }}
            alt="secondaryPic"
            width={300}
            height={100}
            priority
            />
            )}
        </div>
      </div>
    </Layout>
  );
};

function Types({ types }: any) {
  return (
    <div>
      {types.map((item: string, index: number) => (
        <span className="capitalize mr-1" key={index}>
          {item}
          {types[index + 1] && ","}
        </span>
      ))}
    </div>
  );
}

export default Post;
