import Button from "../Button";

const ReadyScale = () => {
  return (
    <div className="wrapper bg-[071626] bg-opacity-0 bg-readyScale py-10 text-center">
      <div className="mx-auto max-w-[45rem]">
        <h2 className="mb-6 text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem]">
          <span className="text-accent">Ready to Scale?</span>
          <br /> Join successful brands that chose us as their
          <span className="text-accent"> growth accelerator</span>
        </h2>
        <div className="mx-auto mb-5 w-fit">
          <Button>Book a call</Button>
        </div>
      </div>
    </div>
  );
};

export default ReadyScale;
