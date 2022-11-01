import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404</title>
        <meta content="Error 404" property="og:title" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <div className="flex items-center fadeIn">
          <img src="/watermelon.webp" alt="An oversimplified watermelon" className="w-12 h-12" />
          <h1 className="text-4xl ml-6 pl-6 border-l-2 dark:border-white">404 <span className="font-light">Not Found</span></h1>
        </div>
      </main>
    </>
  )
}