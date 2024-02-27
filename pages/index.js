import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/mb.jpg" sizes="any" />
        <title>منو بیلدر</title>
        <meta
          name="description"
          content="با منو بیلدر خیالت از بابت منوی دیجیتال رستورانت راحته
      "
        ></meta>
      </Head>
      <div className="flex flex-col justify-center items-center h-screen w-full text-[#2d2d2d] -mt-16 px-6">
        برای خرید و مشاهده منو با شماره 09030335008 تماس بگیرید.
      </div>
    </>
  );
};
export default Home;
