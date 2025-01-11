type ButtonProps = { hasArrow?: boolean; children: React.ReactNode };

const Button = ({ children, hasArrow }: ButtonProps) => {
  return (
    <div className="relative w-fit group">
      <button className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">
        {children}
        {hasArrow ? (
          <>
            <span
              className="w-2.5 h-2.5 bg-primary_background group-hover:bg-white"
              style={{ clipPath: "polygon(0 0, 0% 100%, 80% 50%)" }}></span>
          </>
        ) : null}
      </button>
      <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
    </div>
  );
};

export default Button;
