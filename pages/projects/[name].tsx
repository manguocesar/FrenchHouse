import { useRouter } from "next/router";
import projects from "../../const/projects.json";
import Layout from "@/components/Layout";
import Image from "next/image";

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  const object = projects.find((item) => item.title === name);
  console.log(object?.types);

  return (
    <Layout>
      <div className="flex flex-col items-center mb-5">
        <Image
          className="basis-1/12"
          src="/frenchHouse.png"
          alt="Next.js Logo"
          width={140}
          height={40}
          priority
        />
        <p className="text-xl font-semibold">{object?.title}</p>
        <div>{object && <Types types={object.types} />}</div>
        <p>{object?.buildings}</p>
        <div>{object && <Types types={object.services} />}</div>
        <p>{object?.location}</p>
        <p>{object?.surface}</p>
      </div>
    </Layout>
  );
};

function Types({ types }: any) {
  return (
    <div>
      {types.map((item:string, index:number) => (
        <span className="capitalize m-1" key={index}>{item}</span>
      ))}
    </div>
  );
}

export default Post;
