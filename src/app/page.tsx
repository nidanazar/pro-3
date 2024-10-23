import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer"

const HomePage=()=>{
return(
<div>

  <Header></Header>
  <img src="https://www.upwork.com/catalog-images-resized/1b1feb4323f87542ff3cf46fc759f517/large"srcSet=""></img>
  <div className="w-full h-auto border-2px bg-lime-100 box-border p-4 border-4 ... border-x-black  border-y-black
 font-thin jstify-content text-center h-55">Next.js is a popular open-source React framework for building web applications. It extends React by offering a robust set of features designed to simplify the development of server-rendered and static websites. Some of the key features of Next.js include:
 </div>
<h1 className=" justify-center text-center cursor-pointer items-center text- gap-y-5 gap-x-400  h-16 font-semibold">Information About</h1>
<div className="w-full border-2px bg-sky-300 box-border p-1 border-4 ... border-x-black  border-y-black
 font-thin jstify-content h-44 ">Next.js is widely used for its ability to create fast, scalable, and SEO-friendly web applications. It is especially popular for building modern web apps, e-commerce sites, and blogs.

TypeScript Support: It has first-class TypeScript support, allowing developers to use TypeScript for static type checking and safer coding practices.
TypeScript Support: It has first-class TypeScript support, allowing developers to use TypeScript for static type checking and safer coding practices.


 </div>
  <Footer></Footer>
  
</div>
);
}
export default HomePage
