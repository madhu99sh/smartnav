import dynamic from "next/dynamic";

const QuoteMapPreview = dynamic(() => import("./QuoteMapPreview"), {
  ssr: false,
});
