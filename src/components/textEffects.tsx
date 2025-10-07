import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer",
        1400,
        "Coder",
        1500,
        "Web Developer",
        1300,
        "Programmer",
        1500,
        "Designer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem]  text-[#b74bbf] font-bold"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
