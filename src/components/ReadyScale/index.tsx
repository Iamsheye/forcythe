import Button from "../Button";

const ReadyScale = () => {
  return (
    <div className="wrapper bg-readyScale py-10 text-center bg-[071626] bg-opacity-0">
      <div className="max-w-[45rem] mx-auto">
        <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
          <span className="text-accent">Ready to Scale?</span>
          <br /> Join successful brands that chose us as their
          <span className="text-accent"> growth accelerator</span>
        </h2>
        <div className="w-fit mx-auto mb-5">
          <Button>Book a call</Button>
        </div>
      </div>
    </div>
  );
};

export default ReadyScale;
