import Router, { useRouter } from "next/router";
import React,{useEffect} from "react";

function IndexPage(){
  useEffect(()=>{
    Router.push('/main')
  });

  return <div/>
}

export default IndexPage;

