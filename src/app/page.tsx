import Container from "./components/container";
import Image from 'next/image'
import profile from '../assets/profile.png'
import { CircleUserRound } from 'lucide';
import { ModeToggle } from "./components/themeButton";


export default function Home() {
  return (
    <>

      <Container>
        <div className="flex sm:flex-row flex-col px-20">
          <div className="flex flex-col  dark:bg-gray-800 h-screen w-full sm:w-1/2 items-center">
            <h1 className="font-sans text-black dark:text-white font-extrabold sm:text-4xl mt-5">Caio Figueiredo Silva</h1>
            <p className="font-sans text-black  dark:text-white font-semibold">Desenvolvedor Fullstack</p>
            <Image className="border-neutral-800 border-solid border-4 rounded-full mt-4 w-36 sm:w-52"
              src={profile}
              alt="profile"
              width={500}
              height={500}
            />
            <p className="mt-5 text-3xl text-black font-sans font-semibold">Contato</p>
          </div>
          <div className=" h-screen w-full">
            <ModeToggle />
          </div>
        </div>
      </Container >
    </>
  );
}
