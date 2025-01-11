type ButtonProps = { hasArrow?: boolean; children: React.ReactNode };

const Button = ({ children, hasArrow }: ButtonProps) => {
  return (
    <div className="group relative w-fit">
      <button className="custom-animate w-w-fit relative z-10 flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-[12px] text-center text-base font-semibold text-black hover:shadow-md group-hover:bg-[#064386] group-hover:text-white">
        {children}
        {hasArrow ? (
          <>
            <span
              className="h-2.5 w-2.5 bg-primary_background group-hover:bg-white"
              style={{ clipPath: "polygon(0 0, 0% 100%, 80% 50%)" }}
            ></span>
          </>
        ) : null}
      </button>
      <div className="absolute right-1.5 top-1.5 z-0 h-full w-full rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
    </div>
  );
};

export default Button;
