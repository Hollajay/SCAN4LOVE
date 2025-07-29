interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className="
    py-3 
    px-12 
    text-center 
    bg-secondary 
    rounded-2xl 
    font-spicy
    tracking-wide
    text-white">
      {text}
    </button>
  );
};
