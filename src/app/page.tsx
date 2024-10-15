import Container from "./components/container";



export default function Home() {
  return (
    <>

      <Container>
        <div className="flex sm:flex-row flex-col px-20">
          <div className="flex flex-col bg-slate-500 h-screen w-full sm:w-1/2 items-center">
            <h1 className="font-sans text-black font-extrabold sm:text-4xl mt-5">Caio Figueiredo Silva</h1>
            <p className="font-sans text-black font-semibold">Desenvolvedor Fullstack</p>
          </div>
          <div className="bg-red-400 h-screen w-full"></div>
        </div>
      </Container >
    </>
  );
}
