import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-full min-w-full bg-gray-50 ">
      <div className="flex items-center h-screen">
        <div className="m-auto max-w-3xl flex flex-column flex-wrap gap-10">
          <div className="text-center sm:text-left mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 font-pj">
              Nutrifit.
            </h1>
            <span className="inline-flex px-2 text-md font-bold text-white bg-green-500 rounded-lg font-pj">
              Alpha
            </span>
            <p className="text-xl text-gray-600 mt-12 font-inter">
              Your Personal AI Nutritionist:
              <br />
              Snap, Track, & Reach Your Goals.
            </p>

            <a href="https://play.google.com/store/apps/details?id=com.nutrifit.app&hl=en-US&ah=gbYZgR7bmz2h7DU6gaAfCxU26Hk&pli=1">
              <button
                type="submit"
                className="mt-12 inline-flex px-5 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
              >
                Download for Android
                <Image
                  className="max-w-7 max-h-7 ml-3"
                  src="/nutrifit-icon.png"
                  width={512}
                  height={512}
                  alt="Nutrifit logo."
                />
              </button>
            </a>
            <p className="text-sm text-gray-600 font-inter">
              Internal testers only.
            </p>
          </div>

          <Image
            className="max-w-sm float-right mx-auto w-full rounded-3xl"
            src="/nutrifit-in-use.png"
            width={1024}
            height={1024}
            alt="A woman taking a picture of her food for her personal AI nutritionist."
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAANQTFRF0dXbxn9Y2wAAAApJREFUeJxjZAAAAAQAAiFkrWoAAAAASUVORK5CYII="
          />
        </div>
      </div>
    </main>
  );
}

function StatsBlock() {
  return (
    <>
      <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
        <div className="flex items-center">
          <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
            2943
          </p>
          <p className="ml-3 text-sm text-gray-900 font-pj">
            Cards
            <br />
            Delivered
          </p>
        </div>

        <div className="hidden sm:block">
          <svg
            className="text-gray-400"
            width="16"
            height="39"
            viewBox="0 0 16 39"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
          </svg>
        </div>

        <div className="flex items-center">
          <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
            $1M+
          </p>
          <p className="ml-3 text-sm text-gray-900 font-pj">
            Transaction
            <br />
            Completed
          </p>
        </div>
      </div>
    </>
  );
}

function ExpressInterest() {
  return (
    <form action="#" method="POST" className="mt-8 sm:mt-10">
      <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter email address"
          className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
        />
        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
          <button
            type="submit"
            className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
          >
            Get Free Card
          </button>
        </div>
      </div>
    </form>
  );
}
