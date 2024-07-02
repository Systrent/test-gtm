export default function Home() {
  return (
    <main className="h-screen flex justify-center bg-white text-black">
      <div id="main-container" className="h-full flex flex-col justify-center max-w-5xl border-2 border-gray-100 px-10">
        <div className="flex justify-center flex-col gap-6">
          <div className="flex items-center gap-4">
            <picture className="w-16">
              <img src="https://faable.com/logo/Emblem.png" alt="Faable Logo" />
            </picture>
            <h1 className="text-5xl font-bold">Test for Faable</h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nobis nemo beatae explicabo ducimus dolores dolorum doloremque ad quasi
            eum, voluptatem modi omnis deleniti alias voluptatibus enim aut, optio consectetur?
          </p>
        </div>
        <div className="flex justify-center mt-10 gap-4">
          {Array.from([1, 2, 3]).map((item) => (
            <div className="flex flex-col gap-2 p-4 border-2 border-gray-200 rounded-xl">
              <h2 className="text-3xl font-bold">Subtitle {item}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, velit?</p>
              <a className="rounded-md text-white bg-gray-800 p-2" href="#">
                Link {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
